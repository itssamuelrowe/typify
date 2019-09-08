import React from 'react';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

import Highlight from './component/highlight/Highlight';
import CircularProgressBar from './component/progress/CircularProgressBar';

const stories = [
    {
        title: 'The Bogey-Beast',
        author: 'Flora Annie Steel',
        paragraphs: [
            'There was once a woman who was very, very cheerful, though she had little to make her so; for she was old, and poor, and lonely. She lived in a little bit of a cottage and earned a scant living by running errands for her neighbours, getting a bite here, a sup there, as reward for her services. So she made shift to get on, and always looked as spry and cheery as if she had not a want in the world.',
            'Now one summer evening, as she was trotting, full of smiles as ever, along the high road to her hovel, what should she see but a big black pot lying in the ditch!',
            '"Goodness me!" she cried, "that would be just the very thing for me if I only had something to put in it! But I haven\'t! Now who could have left it in the ditch?"',
            'And she looked about her expecting the owner would not be far off; but she could see nobody.',
            '"Maybe there is a hole in it," she went on, "and that\'s why it has been cast away. But it would do fine to put a flower in for my window; so I\'ll just take it home with me."',
            'And with that she lifted the lid and looked inside. "Mercy me!" she cried, fair amazed. "If it isn\'t full of gold pieces. Here\'s luck!"',
            'And so it was, brimful of great gold coins. Well, at first she simply stood stock-still, wondering if she was standing on her head or her heels. Then she began saying:',
            '"Lawks! But I do feel rich. I feel awful rich!"',
            'After she had said this many times, she began to wonder how she was to get her treasure home. It was too heavy for her to carry, and she could see no better way than to tie the end of her shawl to it and drag it behind her like a go-cart.',
            '"It will soon be dark," she said to herself as she trotted along. "So much the better! The neighbours will not see what I\'m bringing home, and I shall have all the night to myself, and be able to think what I\'ll do! Mayhap I\'ll buy a grand house and just sit by the fire with a cup o\' tea and do no work at all like a queen. Or maybe I\'ll bury it at the garden foot and just keep a bit in the old china teapot on the chimney-piece. Or maybe-Goody! Goody! I feel that grand I don\'t know myself."',
            'By this time she was a bit tired of dragging such a heavy weight, and, stopping to rest a while, turned to look at her treasure.',
            'And lo! it wasn\'t a pot of gold at all! It was nothing but a lump of silver.',
            'She stared at it, and rubbed her eyes, and stared at it again.',
            '"Well! I never!" she said at last. "And me thinking it was a pot of gold! I must have been dreaming. But this is luck! Silver is far less trouble-easier to mind, and not so easy stolen. Them gold pieces would have been the death o\' me, and with this great lump of silver-"',
            'So she went off again planning what she would do, and feeling as rich as rich, until becoming a bit tired again she stopped to rest and gave a look round to see if her treasure was safe; and she saw nothing but a great lump of iron!',
            '"Well! I never!" says she again. "And I mistaking it for silver! I must have been dreaming. But this is luck! It\'s real convenient. I can get penny pieces for old iron, and penny pieces are a deal handier for me than your gold and silver. Why! I should never have slept a wink for fear of being robbed. But a penny piece comes in useful, and I shall sell that iron for a lot and be real rich-rolling rich."',
            'So on she trotted full of plans as to how she would spend her penny pieces, till once more she stopped to rest and looked round to see her treasure was safe. And this time she saw nothing but a big stone.',
            '"Well! I never!" she cried, full of smiles. "And to think I mistook it for iron. I must have been dreaming. But here\'s luck indeed, and me wanting a stone terrible bad to stick open the gate. Eh my! but it\'s a change for the better! It\'s a fine thing to have good luck."',
            'So, all in a hurry to see how the stone would keep the gate open, she trotted off down the hill till she came to her own cottage. She unlatched the gate and then turned to unfasten her shawl from the stone which lay on the path behind her. Aye! It was a stone sure enough. There was plenty light to see it lying there, douce and peaceable as a stone should.',
            'So she bent over it to unfasten the shawl end, when-"Oh my!" All of a sudden it gave a jump, a squeal, and in one moment was as big as a haystack. Then it let down four great lanky legs and threw out two long ears, nourished a great long tail and romped off, kicking and squealing and whinnying and laughing like a naughty, mischievous boy!',
            'The old woman stared after it till it was fairly out of sight, then she burst out laughing too.',
            '"Well!" she chuckled, "I am in luck! Quite the luckiest body hereabouts. Fancy my seeing the Bogey-Beast all to myself; and making myself so free with it too! My goodness! I do feel that uplifted-that GRAND!"-',
            'So she went into her cottage and spent the evening chuckling over her good luck.'
        ]
    },
    {
        title : 'The Tale of Johnny Town-Mouse',
        author: 'Beatrix Potter',
        paragraphs: [
            'Johnny Town-mouse was born in a cupboard. Timmy Willie was born in a garden. Timmy Willie was a little country mouse who went to town by mistake in a hamper. The gardener sent vegetables to town once a week by carrier; he packed them in a big hamper.',
            'The gardener left the hamper by the garden gate, so that the carrier could pick it up when he passed. Timmy Willie crept in through a hole in the wicker-work, and after eating some peas-Timmy Willie fell fast asleep.',
            'He awoke in a fright, while the hamper was being lifted into the carrier\'s cart. Then there was a jolting, and a clattering of horse\'s feet; other packages were thrown in; for miles and miles-jolt-jolt-jolt! and Timmy Willie trembled amongst the jumbled up vegetables.',
            'At last the cart stopped at a house, where the hamper was taken out, carried in, and set down. The cook gave the carrier sixpence; the back door banged, and the cart rumbled away. But there was no quiet; there seemed to be hundreds of carts passing. Dogs barked; boys whistled in the street; the cook laughed, the parlour maid ran up and down-stairs; and a canary sang like a steam engine.',
            'Timmy Willie, who had lived all his life in a garden, was almost frightened to death. Presently the cook opened the hamper and began to unpack the vegetables. Out sprang the terrified Timmy Willie.',
            'Up jumped the cook on a chair, exclaiming "A mouse! a mouse! Call the cat! Fetch me the poker, Sarah!" Timmy Willie did not wait for Sarah with the poker; he rushed along the skirting board till he came to a little hole, and in he popped.',
            'He dropped half a foot, and crashed into the middle of a mouse dinner party, breaking three glasses.-"Who in the world is this?" inquired Johnny Town-mouse. But after the first exclamation of surprise he instantly recovered his manners.',
            'With the utmost politeness he introduced Timmy Willie to nine other mice, all with long tails and white neckties. Timmy Willie\'s own tail was insignificant. Johnny Town-mouse and his friends noticed it; but they were too well bred to make personal remarks; only one of them asked Timmy Willie if he had ever been in a trap?',
            'The dinner was of eight courses; not much of anything, but truly elegant. All the dishes were unknown to Timmy Willie, who would have been a little afraid of tasting them; only he was very hungry, and very anxious to behave with company manners. The continual noise upstairs made him so nervous, that he dropped a plate. "Never mind, they don\'t belong to us," said Johnny.',
            '"Why don\'t those youngsters come back with the dessert?" It should be explained that two young mice, who were waiting on the others, went skirmishing upstairs to the kitchen between courses. Several times they had come tumbling in, squeaking and laughing; Timmy Willie learnt with horror that they were being chased by the cat. His appetite failed, he felt faint. "Try some jelly?" said Johnny Town-mouse.',
            '"No? Would you rather go to bed? I will show you a most comfortable sofa pillow."',
            'The sofa pillow had a hole in it. Johnny Town-mouse quite honestly recommended it as the best bed, kept exclusively for visitors. But the sofa smelt of cat. Timmy Willie preferred to spend a miserable night under the fender.',
            'It was just the same next day. An excellent breakfast was provided-for mice accustomed to eat bacon; but Timmy Willie had been reared on roots and salad. Johnny Town-mouse and his friends racketted about under the floors, and came boldly out all over the house in the evening. One particularly loud crash had been caused by Sarah tumbling downstairs with the tea-tray; there were crumbs and sugar and smears of jam to be collected, in spite of the cat.',
            'Timmy Willie longed to be at home in his peaceful nest in a sunny bank. The food disagreed with him; the noise prevented him from sleeping. In a few days he grew so thin that Johnny Town-mouse noticed it, and questioned him. He listened to Timmy Willie\'s story and inquired about the garden. "It sounds rather a dull place? What do you do when it rains?"',
            '"When it rains, I sit in my little sandy burrow and shell corn and seeds from my Autumn store. I peep out at the throstles and blackbirds on the lawn, and my friend Cock Robin. And when the sun comes out again, you should see my garden and the flowers-roses and pinks and pansies-no noise except the birds and bees, and the lambs in the meadows."',
            '"There goes that cat again!" exclaimed Johnny Town-mouse. When they had taken refuge in the coal-cellar he resumed the conversation; "I confess I am a little disappointed; we have endeavoured to entertain you, Timothy William."',
            '"Oh yes, yes, you have been most kind; but I do feel so ill," said Timmy Willie.',
            '"It may be that your teeth and digestion are unaccustomed to our food; perhaps it might be wiser for you to return in the hamper."',
            '"Oh? Oh!" cried Timmy Willie.',
            '"Why of course for the matter of that we could have sent you back last week," said Johnny rather huffily-"did you not know that the hamper goes back empty on Saturdays?"',
            'So Timmy Willie said good-bye to his new friends, and hid in the hamper with a crumb of cake and a withered cabbage leaf; and after much jolting, he was set down safely in his own garden.',
            'Sometimes on Saturdays he went to look at the hamper lying by the gate, but he knew better than to get in again. And nobody got out, though Johnny Town-mouse had half promised a visit.',
            'The winter passed; the sun came out again; Timmy Willie sat by his burrow warming his little fur coat and sniffing the smell of violets and spring grass. He had nearly forgotten his visit to town. When up the sandy path all spick and span with a brown leather bag came Johnny Town-mouse!',
            'Timmy Willie received him with open arms. "You have come at the best of all the year, we will have herb pudding and sit in the sun."',
            '"H\'m\'m! it is a little damp," said Johnny Town-mouse, who was carrying his tail under his arm, out of the mud.',
            '"What is that fearful noise?" he started violently.',
            '"That?" said Timmy Willie, "that is only a cow; I will beg a little milk, they are quite harmless, unless they happen to lie down upon you. How are all our friends?"',
            'Johnny\'s account was rather middling. He explained why he was paying his visit so early in the season; the family had gone to the sea-side for Easter; the cook was doing spring cleaning, on board wages, with particular instructions to clear out the mice. There were four kittens, and the cat had killed the canary.',
            '"They say we did it; but I know better," said Johnny Town-mouse. "Whatever is that fearful racket?"',
            '"That is only the lawn-mower; I will fetch some of the grass clippings presently to make your bed. I am sure you had better settle in the country, Johnny."',
            '"H\'m\'m-we shall see by Tuesday week; the hamper is stopped while they are at the sea-side."',
            '"I am sure you will never want to live in town again," said Timmy Willie.',
            'But he did. He went back in the very next hamper of vegetables; he said it was too quiet!!',
            'One place suits one person, another place suits another person. For my part I prefer to live in the country, like Timmy Willie.'
        ]
    }
];

const styles = theme => ({
    root: {
        height: '100vh'
    },
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginBottom: 32,
    },
    stage: {
        margin: 24,
    },
    paragraph: {
        background: 'white',
        color: '#bdbdbd',
        fontFamily: 'Courier New',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 24,
        border: 'none',
        whiteSpace: 'pre-wrap'
    },
    inputLabel: {
        backgroundColor: 'white',
        paddingLeft: 6,
        paddingRight: 6
    },
    firstTextField: {
    },
    textField:{
        marginTop: 24
    },
    lastTextField: {
        marginTop: 24,
        marginBottom: 32
    },
    actionButton: {
        width: 100,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12,
    }
});

class App extends React.Component {

    state = {
        storyIndex: 0,
        paragraphIndex: 0,
        ranges: [],
        text: '',
        characterIndex: -1,
        result: {
            typedCharacters : 0,
            accuracy: 1.0,
            wordsPerMinute: 0,
            charactersPerMinute: 0,
            errors: 0,
        },
        timer: {
            time: 0,
            running: false,
            start: 0
        }
    }

    constructor(props) {
        super(props);

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        const { time } = this.state.timer;
        this.setState({
            ...this.state,
            timer: {
                running: true,
                time,
                start: Date.now() - time
            }
        });

        this.timer = setInterval(() => {
            const { start } = this.state.timer;
            this.setState({
                ...this.state,
                timer: {
                    running: true,
                    time: Date.now() - start,
                    start
                }
            });
        }, 1000);
    }

    stopTimer() {
        const { start, time } = this.state.timer;
        this.setState({
            ...this.state,
            timer: {
                isOn: false,
                time,
                start
            }
        });
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setState({
            ...this.state,
            timer: {
                time: 0,
                running: false,
                start: 0
            }
        });
    }

    handleKeyPress = (event) => {
        const { time, running } = this.state.timer;
        if (running) {
            const { paragraphIndex, storyIndex, text, characterIndex, ranges, result } = this.state;

            const newRanges = ranges.slice(0, ranges.length - 1); // ranges.map(object => ({ ... object}) );
            const newResult = { ...result }

            let enterProcessed = false;
            if (event.key === 'Enter') {
                if (text.length === (characterIndex + 1)) {
                    this.setState({
                        ...this.state,
                        paragraphIndex: paragraphIndex + 1,
                        text: stories[storyIndex].paragraphs[paragraphIndex + 1],
                        characterIndex: -1,
                        ranges: [{
                            start: 0,
                            end: 0,
                            style: {
                                textDecoration: 'underline',
                                textDecorationColor: 'black',
                                background: 'black',
                                color: 'white'
                            }
                        }]
                    });
                    enterProcessed = true;
                }
            }

            if (!enterProcessed && event.key !== 'Shift') {
                if (text[characterIndex + 1] !== event.key) {
                    newRanges.push({
                        start: characterIndex,
                        end: characterIndex + 1,
                        style: {
                            color: 'red'
                        }
                    });
                    newResult.errors++;
                }
                else {
                    newRanges.push({
                        start: characterIndex,
                        end: characterIndex + 1,
                        style: {
                            color: 'black'
                        }
                    });
                }

                newRanges.push({
                    start: characterIndex + 1,
                    end: characterIndex + 2,
                    style: {
                        textDecoration: 'underline',
                        textDecorationColor: 'black',
                        background: 'black',
                        color: 'white'
                    }
                });

                newResult.typedCharacters = result.typedCharacters + 1;
                const totalWords = newResult.typedCharacters / 5;

                newResult.accuracy = (newResult.typedCharacters - newResult.errors) / newResult.typedCharacters;
                newResult.wordsPerMinute = totalWords / (time / (1000 * 60));
                console.log(newResult.wordsPerMinute);
                newResult.charactersPerMinute = newResult.typedCharacters / (time / (1000 * 60));

                this.setState({
                    ...this.state,
                    ranges : newRanges,
                    characterIndex: characterIndex + 1,
                    result: newResult
                });
            }
        }
    }

    componentDidMount() {
        this.resetStage();
    }

    formatTime = (time) => {
        var date = new Date(time);
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var ss = date.getSeconds();
        /* If you were building a timestamp instead of a duration, you would
         * uncomment the following line to get 12-hour (not 24) time
         */

        // if (hh > 12) { hh = hh % 12; }

        /* The following lines ensure that the text has two-digits. */
        /*
        if (hh < 10) {
            hh = "0" + hh;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        if (ss < 10) {
            ss = "0" + ss;
        }
        */

        // This formats your string to HH:MM:SS
        let result = '';
        if (hh > 0) {
            result += hh + 'h';
        }
        if (mm > 0) {
            result += mm + 'm';
        }
        result += ss + 's';

        return result;
    }

    resetStage = () => {
        const storyIndex = (Math.random() * stories.length).toFixed(0) % stories.length;
        this.setState({
            storyIndex,
            paragraphIndex: 0,
            ranges: [{
                start: 0,
                end: 0,
                style: {
                    textDecoration: 'underline',
                    textDecorationColor: 'black',
                    background: 'black',
                    color: 'white'
                }
            }],
            text: stories[storyIndex].paragraphs[0],
            characterIndex: -1,
            result: {
                typedCharacters : 0,
                accuracy: 1.0,
                wordsPerMinute: 0,
                charactersPerMinute: 0,
                errors: 0,
            },
            timer: {
                time: 0,
                running: false,
                start: 0
            }
        });
    }

    render() {
        const { classes } = this.props;
        const { storyIndex, ranges, text, result } = this.state;
        const { running, time } = this.state.timer;

        const story = stories[storyIndex];

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Typify
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Grid container={ true } className={ classes.stage } spacing={ 4 } onKeyDown={ this.handleKeyPress }>
                    <Grid item={ true } lg={ 8 } tabIndex="0"
                        className={ classes.paragraph }
                        ref={ stage => { this.stage = stage; } }>
                        <Typography variant="h1" className={classes.title}>{ story.title } <span style={{ fontSize: 20 }}>&mdash; { story.author }</span></Typography>
                        <Highlight ranges={ ranges }
                            enabled={ true }
                            highlightStyle={{
                                backgroundColor: '#ffcc80'
                            }}
                            text={ text + '\u23CE' }
                        />
                    </Grid>
                    <Grid item={ true } lg={ 3 }>
                        <TextField
                            label="Accuracy"
                            id="accuracy"
                            name="accuracy"
                            variant="outlined"
                            fullWidth={ true }
                            value={ (result.accuracy * 100).toFixed(0) + '%' }
                            InputLabelProps={{
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            className={ classes.firstTextField }
                            inputProps={{
                                readOnly: true
                            }}
                        />
                        <TextField
                            label="Words Per Minute (WPM)"
                            id="wordsPerMinute"
                            name="wordsPerMinute"
                            variant="outlined"
                            fullWidth={ true }
                            value={ result.wordsPerMinute.toFixed(0) }
                            InputLabelProps={{
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            className={ classes.textField }
                            inputProps={{
                                readOnly: true
                            }}
                        />
                        <TextField
                            label="Characters Per Minute (CPM)"
                            id="charactersPerMinute"
                            name="charactersPerMinute"
                            variant="outlined"
                            fullWidth={ true }
                            value={ result.charactersPerMinute.toFixed(0) }
                            InputLabelProps={{
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            className={ classes.textField }
                            inputProps={{
                                readOnly: true
                            }}
                        />
                        <TextField
                            label="Errors"
                            id="errors"
                            name="errors"
                            variant="outlined"
                            fullWidth={ true }
                            value={ result.errors }
                            InputLabelProps={{
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            className={ classes.lastTextField }
                            inputProps={{
                                readOnly: true
                            }}
                        />
                        <Grid direction="row" container={ true } spacing={ 4 }>
                            <Grid item={ 8 }>
                                <CircularProgressBar
                                    strokeWidth="10"
                                    sqaureSize="200"
                                    percentage={ ((time / 1000) / 60) * 100 }
                                    text={ this.formatTime(time) }
                                    className={ classes.stopWatch }
                                />
                            </Grid>
                            <Grid item={ 3 }>
                                { (time === 0)? <Button variant="contained" color="primary" className={ classes.actionButton } onClick={ () => { this.stage.focus(); this.startTimer(); } }>Start</Button> : null }
                                { ((time === 0) || !running)? null : <Button variant="contained" color="primary" className={ classes.actionButton } onClick={ this.stopTimer }>Stop</Button> }
                                { ((time === 0) || running)? null : <Button variant="contained" color="primary" className={ classes.actionButton } onClick={ () => { this.stage.focus(); this.startTimer(); } }>Resume</Button> }
                                { ((time === 0) || running)? null : <Button variant="contained" color="primary" className={ classes.actionButton } onClick={ () => { this.resetTimer(); this.resetStage(); } }>Reset</Button> }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);
