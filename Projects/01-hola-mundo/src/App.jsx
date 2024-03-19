import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <section className='App'>
            <TwitterFollowCard username="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard username="pheralb">
                Random xD
            </TwitterFollowCard>
            <TwitterFollowCard username="elonmusk">
                XD
            </TwitterFollowCard>
        </section>
    )
}
