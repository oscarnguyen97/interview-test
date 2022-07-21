import { useEffect, useState } from "react";
import { Container, Content, Story, WrapButton, ButtonVoteFun, ButtonVoteNotFun, End } from "./styled";
import axios from "axios";

interface InJokes {
    jokes_id: number,
    content: string
}

const Jokes = () => {
    const [allJokes, setAllJokes] = useState<InJokes[]>([])
    const [jokes, setJokes] = useState<InJokes>()
    const [jokesId, setJokesId] = useState<number>(1)



    useEffect(() => {
        const handleGetJokes = async() => {
            const jokes = await axios({
                method: 'GET',
                url: `http://localhost:9999/all-jokes`
            })
            
            setAllJokes(jokes.data)
        }
        handleGetJokes()
        
    },[setAllJokes])

    const handleGetFun = async() => {
        const voteFun = {
            funny: 1,
            not_funny: 0,
            jokes_id: jokesId - 1,
        }

        await axios({
            method: 'POST',
            url: `http://localhost:9999/post-new-vote`,
            data: {
                data: voteFun
            }
        })
    }

    const handleGetNotFun = async() => {
        const voteNotFun = {
            funny: 0,
            not_funny: 1,
            jokes_id: jokesId - 1,
        }

        await axios({
            method: 'POST',
            url: `http://localhost:9999/post-new-vote`,
            data: {
                data: voteNotFun
            }
        })
    }

    const handleGetNewJokes = (jokes_id: number) => {
        if(allJokes.length > 0) {
            setJokes(allJokes[jokes_id])
        }
    }

    const handleSumitFun = () => {
        setJokesId(preId => preId + 1)
        handleGetNewJokes(jokesId)
        handleGetFun()
        
    }

    const handleSumitNotFun = () => {
        setJokesId(preId => preId + 1)
        handleGetNewJokes(jokesId)
        handleGetNotFun()
    }

    return (
        <Container>
            <Content>
                {
                    jokesId > (allJokes.length - 1)
                    ?
                    (<End>
                        "That's all the jokes for today! Come back another day!"
                    </End>)
                    : 
                    (<Story>{
                        (allJokes.length > 0 && jokesId === 1) 
                            ? allJokes[0].content 
                            : jokes?.content
                    }</Story>)
                }
                
            </Content>
            <WrapButton>
                <ButtonVoteFun onClick={() => handleSumitFun()} >this is Funny!</ButtonVoteFun>
                <ButtonVoteNotFun onClick={() => handleSumitNotFun()} >this is Not Funny!</ButtonVoteNotFun>
            </WrapButton>
        </Container>
    )
}



export default Jokes