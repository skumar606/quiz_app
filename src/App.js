import React, { Component } from 'react'
import './App.css';
import Question from './workspace/Components/Question'
import Container from './components/Container'


export class App extends Component {

    render() {
        const questions = 
        [
            {
                id: '1',
                statement: `The "Eat the Frog" is one of simplest yet most effective productivity techniques
                around. What is the "frog" in "Eat the Frog"?`,
                options: [
                            {
                                id: 'A',
                                value: 'An or a set of easy tasks on your "to do" list'
                            },
                            {
                                id: 'B',
                                value: 'Your hardest, most important task for the day'
                            },
                            {
                                id: 'C',
                                value: `Your manager's latest burning ask from you`
                            },
                            {
                                id: 'D',
                                value: 'An actual frog'
                            }
                        ],
                answer: {
                    id: 'B',
                    value: 'Your hardest, most important task for the day'
                },
                comment: `The “Frog” is also known as your Most Important Task (MIT). This task is often important but not urgent, the type of
                difficult task that creates a lot of mental resistance and ensuing procrastination if you don't intentionally make time for
                it. You probably already know the task I’m talking about.`
            },
            {
                id: '2',
                statement: 'When do you "eat the frog" i.e. do the most important task for the day?',
                options: [
                            {
                                id: 'A',
                                value: 'First thing in the morning'
                            },
                            {
                                id: 'B',
                                value: 'During an empty slot in the calendar'
                            },
                            {
                                id: 'C',
                                value: 'Immediately after lunch'
                            },
                            {
                                id: 'D',
                                value: 'At night, when there are no distractions'
                            }
                        ],
                answer: {
                    id: 'A',
                    value: 'First thing in the morning'
                },
                comment: `We all know intuitively that not all work hours are created equal. The first hour of the morning when your energy and
                willpower are high is a helluva lot more productive than the hour after lunch when all you want to do is curl up and take
                a nap. Eat the Frog ensures that you’re using your best hours to do your most mentally taxing work and leaves less
                important tasks for times when you’ve already exhausted your brain power for the day.`
            },
            {
                id: '3',
                statement: 'What should be size of the task that you choose as your frog?',
                options: [
                            {
                                id: 'A',
                                value: 'A task you can complete in 30-60 mins'
                            },
                            {
                                id: 'B',
                                value: 'A task you can complete in 1-4 hours'
                            },
                            {
                                id: 'C',
                                value: 'A task you can complete in less that 30 mins'
                            },
                            {
                                id: 'D',
                                value: 'A task you can complete in 4-8 hours'
                            }
                        ],
                answer: {
                    id: 'B',
                    value: 'A task you can complete in 1-4 hours'
                },
                comment: `Your frog should take half a day’s work, tops. A clearly defined, realistic task will make it easier to get started and not
                procrastinate on. Checking it off your list before lunch will give you a concrete win and accompanying endorphin boost
                to carry you into the rest of your day.`
            },
            {
                id: '4',
                statement: 'Why should you "eat the frog" first thing in the morning?',
                options: [
                            {
                                id: 'A',
                                value: 'So that you can take the rest of the day off'
                            },
                            {
                                id: 'B',
                                value: 'So that you can eat another frog in the afternoon'
                            },
                            {
                                id: 'C',
                                value: 'So that you have the whole day to complete the task'
                            },
                            {
                                id: 'D',
                                value: 'So that your most important task gets prioritized first'
                            }
                        ],
                answer: {
                    id: 'D',
                    value: 'So that your most important task gets prioritized first'
                },
                comment: `Whatever your frog for the day happens to be, do it first thing when you sit down to work. If at all possible, don’t
                schedule meetings. Don’t catch up on Twitter. Don’t check your email. Don’t even think about thinking about all the
                other less important things you’ll have to do later in the day. Focus all of your mental energy on your frog and only your
                frog.`
            },
            {
                id: '5',
                statement: 'How frequently should you "eat the frog"?',
                options: [
                            {
                                id: 'A',
                                value: 'Once every week'
                            },
                            {
                                id: 'B',
                                value: 'Once every fortnight'
                            },
                            {
                                id: 'C',
                                value: 'Daily'
                            },
                            {
                                id: 'D',
                                value: 'Whenever you need'
                            }
                        ],
                answer: {
                    id: 'C',
                    value: 'Daily'
                },
                comment: `Any day that you eat your frog is a good day. Furthermore, following the method means you’ll be making progress on
                something meaningful on a daily basis. Studies have shown that that kind of progress is a key motivator and predictor of
                happiness and engagement at work, and can lead to a virtuous cycle of getting things done. We feel good when we
                follow through on the things we intended to do which in turn makes it easier to continue doing them. When you
                experience a win first thing in the morning, you’re more likely to build momentum and good vibes to carry you through
                the rest of your workday.`
            },
            {
                id: '6',
                statement: 'What important habit does "eat the frog" help you develop?',
                options: [
                            {
                                id: 'A',
                                value: 'Time management'
                            },
                            {
                                id: 'B',
                                value: 'Multi-tasking'
                            },
                            {
                                id: 'C',
                                value: 'Prioritization'
                            },
                            {
                                id: 'D',
                                value: 'Deep work'
                            }
                        ],
                answer: {
                    id: 'D',
                    value: 'Deep work'
                },
                comment: `The most valuable work in today’s knowledge economy is almost invariably work that requires all your mental resources
                to be focused on one thing — think cognitively demanding tasks like coding, designing, writing, strategizing, and
                problem-solving. Yet the modern workplace isn’t set up to support that kind of distraction-free “deep work” (a phrase
                coined by computer science professor Cal Newport). We’re distracted by so many emails, meetings, chat messages and
                requests for input that we don’t have the time or space to focus on our highest impact tasks.
                Eat The Frog requires us to push back against all of those distractions — both external (others interrupting us) and
                internal (us interrupting ourselves) — and prioritize the actions that will actually bring us closer to our goals.`
            }
        ]
        return (
            <div className="App">
                <Container>
                    <h2 className='align-center'>Quiz: Eat the Frog</h2>
                    <Question questions={questions} />
                </Container>
            </div>
        )
    }
}

export default App
