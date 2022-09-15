interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return <a href="" className="relative rounded-lg overflow-hidden">
        <img src={props.bannerUrl} alt="" />
        <div className='w-full pt-16 pv-4 px-4 bg-game-gradient absolute bottom-0 pb-2'>
            <strong className='text-white font-bold block'>{props.title}</strong>
            <span className='text-zinc-300 text-sm'>{props.adsCount} anúncio(s)</span>
        </div>
    </a>
}