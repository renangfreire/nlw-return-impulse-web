import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
        placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
        placeholder: 'Tem alguma ideia? Conte-nós ficaremos muito gratos por recebê-la.'
        
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
        placeholder: 'Interessante, melhor contar-nós com detalhes o que está acontecendo.'
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
       <div className="relative flex flex-col items-center p-4 mb-4 shadow-lg bg-zinc-900 rounded-2xl w-[calc(100vw-2rem)] md:w-auto">
          

           { feedbackSent ?  ( <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} /> ) : (<> 
           {!feedbackType ? 
                (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />)
             :  (<FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
                />)
            }</>) }

           <footer className="text-xs text-neutral-4 0">
           Feito com ♥ pela <a target="_blank" className="underline underline-offset-2"href="https://rocketseat.com.br">Rocketseat</a> 
           </footer>
       </div> 
    );
}