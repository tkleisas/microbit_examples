function displayGreekLED(text: string, time: number = 500): void {
    const hs1 = "!" + '"' + "#$%&'()*+,-./:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ~"
    const hs2 = ""
    const arr = [
        "0000230000",   //！
        "0007000700",
        "1031103110",
        "1423212910",
        "1909041825",
        "1021211016",
        "0000030000",
        "0000001417",
        "1714000000",
        "0005020500",
        "0404310404",
        "0024000000",
        "0004040400",
        "0000160000",
        "1608040201",
        "0000100000",
        "0016100000",
        "0004101700",
        "0010101000",
        "0017100400",
        "0201210502",
        "1421273114",
        "3005053000",   //A
        "3121211000",   //B
        "1417171700",   //C
        "3117171400",   //D
        "3121211700",   //E
        "3105050100",   //F
        "1417172112",   //G
        "3104043100",   //H
        "1731170000",   //I
        "0917171501",   //J
        "3104101700",   //K
        "3116161600",   //L
        "3102040231",   //M
        "3102040831",   //N
        "1417171400",   //O
        "3105050200",   //P
        "0609252200",   //Q
        "3105051016",   //R
        "1821210900",   //S
        "0101310101",   //T
        "1516161500",   //U
        "0708160807",   //V
        "3108040831",   //W
        "2704042700",   //X
        "0102280201",   //Y
        "2521191700",   //Z
        "1417171400",   //0
        "0018311600",   //1
        "2521211800",   //2
        "0917211100",   //3
        "1210093108",   //4
        "2321212109",   //5
        "0820222108",   //6
        "1709050301",   //7
        "1021212110",   //8
        "0221130502",   //9
        "3005053000",   //Α
        "3121211000",   //Β
        "3101010100",   //Γ
        "3017173000",   //Δ
        "3121211700",   //Ε
        "2521191700",   //Ζ
        "3104043100",   //Η
        "1421211400",   //Θ
        "1731170000",   //Ι
        "3104101700",   //Κ
        "3001013000",   //Λ
        "3102040231",   //Μ
        "3102040831",   //Ν
        "2121212100",   //Ξ
        "1417171400",   //Ο
        "3101013100",   //Π
        "3105050200",   //Ρ
        "1727211700",   //Σ
        "0101310101",   //Τ
        "0102280201",   //Υ
        "1410311014",   //Φ
        "2704042700",   //Χ
        "0704310407",   //Ψ
        "2321212300",   //Ω


    ]
    const arr2 = [

        "0000000000",
    ]

    let strings: number[] = [0, 0, 0, 0]
    for (let d = 0; d < text.length; d++) {
        for (let x = 0; x < arr.length; x++) {
            if (hs1.substr(x, 1) == text.substr(d, 1)) {
                for (let z = 0; z < 5; z++) strings.push(parseInt(arr[x].substr(z * 2, 2)))
                strings.push(0)
            }
            if (hs2.substr(x, 1) == text.substr(d, 1)) {
                for (let a = 0; a < 5; a++) strings.push(parseInt(arr2[x].substr(a * 2, 2)))
                if ((x == arr2.length - 2) || (x == arr2.length - 1)) {
                    strings.splice(strings.length - 6, 1)
                    strings.splice(strings.length - (3 - ((x + 1) % 2)), (3 - ((x + 1) % 2)))
                }
                strings.push(0)
                break
            }
        }
    }

    if (strings.length == 10) {
        for (let y = 0; y < 5; y++)
            for (let b = 0, tmp = strings[y + 4]; b < 5; b++) {
                tmp % 2 == 1 && led.plot(y, b)
                tmp = (tmp - (tmp % 2)) / 2
            }
    } else {
        for (let c = 0; c < strings.length; c++) {
            for (let e = c; e < c + 5; e++)
                for (let f = 0, tmp2 = strings[e]; f < 5; f++) {
                    tmp2 % 2 == 1 && led.plot(e - c, f)
                    tmp2 = (tmp2 - (tmp2 % 2)) / 2
                }
            basic.pause(time)
            for (let g = 0; g < 5; g++)
                for (let h = 0; h < 5; h++)
                    led.unplot(g, h)
        }
    }

}
basic.forever(() => {
    displayGreekLED("123 Ω ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ");
})
