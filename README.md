# microbit_examples
In here you can find a few example programs for bbc micro:bit. The easiest way to use them is open the micro:bit javascript block editor, switch to javascript mode and paste the code from the examples.
Example list
1. messenger.js Use 2 or more microbits to send messages to one another. Use A and B keys to select letters, press both A and B keys to select a letter, and select '>' character and press both A and B keys to send the message to other microbits.
You can find a video in youtube here: https://www.youtube.com/watch?v=B6xTvOjSI_M
2. sequencer.js Use your microbit as a sequencer. 1 to 16 steps selectable. Also possibility to set the tempo. The various parameters (tempo, sequence length and individual note pitch) can be set by using the accelerometer (by tilting the microbit left and right and up and down). Initially the microbit is in choose tempo mode, by pressing A+B at the same time you move on to the next mode. The second mode is sequence length (adjustable between 1 and 16). The third mode is note pitch selection (press B to move to the next note, adjust pitch by tilting the microbit) . The fourth mode plays back the sequence. The fifth mode does nothing for now, it just displays a dot in the middle of microbit screen.
3. displaynumber.js How can I display a bigger number without scrolling the screen? By using an alternate representation. In this example it is shown how the microbit can display numbers 0 to 599. How we do that? Take a look at the example below:

The number 123 written using the leds (LED OFF is represented by . and LED ON is represented by #:
`.....`

`.....`

`....#`

`..#.#`

`#.#.#`

So, the first column of leds from the bottom indicates the hundreds (1).
The second and third columns represent the decades (2).
The fourth and fifth columns represent the last digit (3)

The biggest number That we can display is 599 and it looks like this:
`#.#.#`

`#####`

`#####`

`#####`

`#####`

