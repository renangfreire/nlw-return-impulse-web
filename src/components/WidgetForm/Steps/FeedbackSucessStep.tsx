import { CloseButton } from "../../CloseButton";

import successImageUrl from "../../../assets/success.svg"

interface FeedbackSuccessProps {
     onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }:FeedbackSuccessProps){
    return (
        <>
        <header>
            <CloseButton />
        </header>

        <div className="flex flex-col items-center py-10 w-[304px]">
            <img src={successImageUrl} alt="Imagem Concluído" />
            <span className="mt-2 text-xl">Agradecemos o feedback</span>

            <button 
            type="button"
            onClick={onFeedbackRestartRequested}
            className="px-6 py-2 mt-6 text-sm leading-6 transition-colors border-transparent rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                Quero enviar outro
            </button>
        </div>
        </>
    );
}