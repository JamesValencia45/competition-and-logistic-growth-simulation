document.getElementById("myButton").onclick = function () { // button click lisener

    time = document.getElementById("myText").value; // html value stored in to variable time
    time = parseInt(time) //  time variable converted in to int
    var tt = time, on = 0, gn = 0, bn = 10, rn = 0, om = 0, gm = 0, bm = 0, rmm = 0, bd = 0, od = 0, gd = 0, rd = 0, bp = 10, op = 0, gp = 0, rp = 0; // variables globalized 
    var b = 10, bt = b, o = 0, ot = o, g = 0, gt = g, rr = 0, rt = rr; // variables globalized 
    while (tt > 0) { // creature calculation loop
        while (bt > 0) { // Blue creature calculation
            if (b > 0 && bt > 0) {
                r = (Math.floor(Math.random() * 10) + 1); // repraduction chance
                if (r == 1) {
                    rm = (Math.floor(Math.random() * 10) + 1); // mutation chance
                    if (rm > 2) {
                        bn = (bn + 1);
                        b = (b + 1);
                        bp = (bp + 1);
                    } else if (rm == 2) {
                        om = om + 1;
                        o = o + 1;
                        op = op + 1;
                    } else if (rm == 1) {
                        g = g + 1;
                        gm = gm + 1;
                        gp = gp + 1;
                    }
                }
                d = (Math.floor(Math.random() * 3) + 1); // death chance
                if (d == 1) {
                    b = b - 1;
                    bd = bd + 1;
                }
                bt = bt - 1;
            }
        }
        while (ot > 0) { // Orange creature calculation
            if (o > 0 && ot > 0) {
                r = (Math.floor(Math.random() * 10) + 1);// repraduction chance
                if (r == 1) {
                    rm = (Math.floor(Math.random() * 20) + 1);// mutation chance
                    if (rm <= 3) {
                        rmm = rmm + 1;
                        rr = rr + 1;
                        rp = rp + 1;
                    } else if (rm > 3) {
                        on = on + 1;
                        o = o + 1;
                        op = op + 1;
                    }
                }
                d = (Math.floor(Math.random() * 20) + 1);// death chance
                if (d == 1) {
                    o = o - 1;
                    od = od + 1;
                }
                ot = ot - 1;
            }
        }
        while (gt > 0) { // Green creature calculation
            if (g > 0 && gt > 0) {
                r = (Math.floor(Math.random() * 7) + 1);// repraduction chance
                if (r == 1) {
                    rm = (Math.floor(Math.random() * 8) + 1);// mutation chance
                    if (rm > 2) {
                        g = g + 1;
                        gn = gn + 1;
                        gp = gp + 1;
                    } else if (rm == 2) {
                        bm = (bm + 1);
                        b = (b + 1);
                        bp = (bp + 1);
                    } else if (rm == 1) {
                        om = om + 1;
                        o = o + 1;
                        op = op + 1;
                    }
                }
                d = (Math.floor(Math.random() * 10) + 1);// death chance
                if (d == 1) {
                    g = g - 1;
                    gd = gd + 1;
                }
                gt = gt - 1;
            }
        }
        while (rt > 0) { // red creature calculation
            if (r > 0 && rt > 0) {
                r = (Math.floor(Math.random() * 3) + 1);// repraduction chance
                if (r == 1) {
                    rm = (Math.floor(Math.random() * 6) + 1);// mutation chance
                    if (rm > 2) {
                        rr = rr + 1;
                        rn = rn + 1;
                        rp = rp + 1;
                    } else if (rm == 2) {
                        g = g + 1;
                        gm = gm + 1;
                        gp = gp + 1;
                    } else if (rm == 1) {
                        om = om + 1;
                        o = o + 1;
                        op = op + 1;
                    }
                }
                d = (Math.floor(Math.random() * 10) + 1);// death chance
                if (d == 1) {
                    rr = rr - 1;
                    rd = rd + 1;
                }
                rt = rt - 1;
            }
        }
        bt = b, gt = g, ot = o, rt = r; // amount of creatures stored into amount of times block repeats
        tt = tt - 1
    }
    document.getElementById("timeCycle").innerHTML = `After ${time} cycles`;
    document.getElementById("red").innerHTML = `Red creaturs : natral births ${rn}, mutant births ${rmm}, deaths ${rd}, alive ${rr} and creatures total ${rp}`; // javascript values to html
    document.getElementById("blue").innerHTML = `Blue creaturs : natral births ${bn}, mutant births ${bm}, deaths ${bd}, alive ${b} and creatures total ${bp}`; // javascript values to html
    document.getElementById("orange").innerHTML = `Orange creaturs : natral births ${on}, mutant births ${om}, deaths ${od}, alive ${o} and creatures total ${op}`; // javascript values to html
    document.getElementById("green").innerHTML = `Green creaturs : natral births ${gn}, mutant births ${gm}, deaths ${gd}, alive ${g} and creatures total ${gp}`; // javascript values to html
}