document.getElementById("myButton").onclick = function () {
    let tt = []
    t = document.getElementById("time").value;
    originalT = t// 6-5-2026
    rr = document.getElementById("redC").value;
    b = document.getElementById("blueC").value;
    g = document.getElementById("greenC").value;
    o = document.getElementById("orangeC").value;
    redR = document.getElementById("redR").value;
    blueR = document.getElementById("blueR").value;
    greenR = document.getElementById("greenR").value;
    orangeR = document.getElementById("orangeR").value;
    redB = document.getElementById("redB").value;
    blueB = document.getElementById("blueB").value;
    greenB = document.getElementById("greenB").value;
    orangeB = document.getElementById("orangeB").value;
    redG = document.getElementById("redG").value;
    blueG = document.getElementById("blueG").value;
    greenG = document.getElementById("greenG").value;
    orangeG = document.getElementById("orangeG").value;
    redO = document.getElementById("redO").value;
    blueO = document.getElementById("blueO").value;
    greenO = document.getElementById("greenO").value;
    orangeO = document.getElementById("orangeO").value;
    redW = document.getElementById("redW").value;
    blueW = document.getElementById("blueW").value;
    greenW = document.getElementById("greenW").value;
    orangeW = document.getElementById("orangeW").value;

    t = parseInt(t)
    rr = parseInt(rr); b = parseInt(b); g = parseInt(g); o = parseInt(o)
    redR = parseInt(redR); blueR = parseInt(blueR); greenR = parseInt(greenR); orangeR = parseInt(orangeR)
    redB = parseInt(redB); blueB = parseInt(blueB); greenB = parseInt(greenB); orangeB = parseInt(orangeB)
    redG = parseInt(redG); blueG = parseInt(blueG); greenG = parseInt(greenG); orangeG = parseInt(orangeG)
    redO = parseInt(redO); blueO = parseInt(blueO); greenO = parseInt(greenO); orangeO = parseInt(orangeO)
    redW = parseInt(redW); blueW = parseInt(blueW); greenW = parseInt(greenW); orangeW = parseInt(orangeW)
    if (rr + b + g + o > 100) {
        document.getElementById("test").innerHTML = `the starting creatures combined are greater than 100, change values to continue`;
        return
    }
    if (redR != 0) {
        redR = redR / 100; redRc = 100 / redR;
    } else {
        redRc = -1
    }
    if (blueR != 0) {
        blueR = blueR / 100; blueRc = 100 / blueR;
    } else {
        blueRc = -1
    }
    if (greenR != 0) {
        greenR = greenR / 100; greenRc = 100 / greenR;
    } else {
        greenRc = -1
    }
    if (orangeR != 0) {
        orangeR = orangeR / 100; orangeRc = 100 / orangeR;
    } else {
        orangeRc = -1
    }
    if (redB != 0) {
        redB = redB / 100; redBc = 100 / redB;
    } else {
        redBc = -1
    }
    if (blueB != 0) {
        blueB = blueB / 100; blueBc = 100 / blueB;
    } else {
        blueBc = -1
    }
    if (greenB != 0) {
        greenB = greenB / 100; greenBc = 100 / greenB;
    } else {
        greenBc = -1
    }
    if (orangeB != 0) {
        orangeB = orangeB / 100; orangeBc = 100 / orangeB;
    } else {
        orangeBc = -1
    }
    if (redG != 0) {
        redG = redG / 100; redGc = 100 / redG;
    } else {
        redGc = -1
    }
    if (blueG != 0) {
        blueG = blueG / 100; blueGc = 100 / blueG;
    } else {
        blueGc = -1
    }
    if (greenG != 0) {
        greenG = greenG / 100; greenGc = 100 / greenG;
    } else {
        greenGc = -1
    }
    if (orangeG != 0) {
        orangeG = orangeG / 100; orangeGc = 100 / orangeG;
    } else {
        orangeGc = -1
    }
    if (redO != 0) {
        redO = redO / 100; redOc = 100 / redO;
    } else {
        redOc = -1
    }
    if (blueO != 0) {
        blueO = blueO / 100; blueOc = 100 / blueO;
    } else {
        blueOc = -1
    }
    if (greenO != 0) {
        greenO = greenO / 100; greenOc = 100 / greenO;
    } else {
        greenOc = -1
    }
    if (orangeO != 0) {
        orangeO = orangeO / 100; orangeOc = 100 / orangeO;
    } else {
        orangeOc = -1
    }
    if (redW != 0) {
        redW = redW / 100; redWc = 100 / redW;
    } else {
        redWc = -1
    }
    if (blueW != 0) {
        blueW = blueW / 100; blueWc = 100 / blueW;
    } else {
        blueWc = -1
    }
    if (greenW != 0) {
        greenW = greenW / 100; greenWc = 100 / greenW;
    } else {
        greenWc = -1
    }
    if (orangeW != 0) {
        orangeW = orangeW / 100; orangeWc = 100 / orangeW;
    } else {
        orangeWc = -1
    }




    redRc = Math.floor(redRc); blueRc = Math.floor(blueRc); greenRc = Math.floor(greenRc); orangeRc = Math.floor(orangeRc);
    redBc = Math.floor(redBc); blueBc = Math.floor(blueBc); greenBc = Math.floor(greenBc); orangeBc = Math.floor(orangeBc);
    redGc = Math.floor(redGc); blueGc = Math.floor(blueGc); greenGc = Math.floor(greenGc); orangeGc = Math.floor(orangeGc);
    redOc = Math.floor(redOc); blueOc = Math.floor(blueOc); greenOc = Math.floor(greenOc); orangeOc = Math.floor(orangeOc);
    redWc = Math.floor(redWc); blueWc = Math.floor(blueWc); greenWc = Math.floor(greenWc); orangeWc = Math.floor(orangeWc);

    document.getElementById("timeCycle").innerHTML = `loading`;
    while (t > 0) {

        rrt = rr
        bt = b
        gt = g
        ot = o
        if (rrt < 0) {
            rrt = 0
        }
        if (bt < 0) {
            bt = 0
        }
        if (gt < 0) {
            gt = 0
        }
        if (ot < 0) {
            ot = 0
        }
        w = 100 - (rr + b + g + o)
        wt = w
        while (rrt + bt + gt + ot > 0) {
            document.getElementById("test").innerHTML = `in while loop`;
            tt = []
            if (rrt > 0) {
                tt.splice(tt.length, 0, "rrt")
            }
            if (bt > 0) {
                tt.splice(tt.length, 0, "bt")
            }
            if (gt > 0) {
                tt.splice(tt.length, 0, "gt")
            }
            if (ot > 0) {
                tt.splice(tt.length, 0, "ot")
            }
            if (wt > 0) {
                tt.splice(tt.length, 0, "wt")
            }

            ttt = tt

            ttch = tt[(Math.floor(Math.random() * tt.length))]
            tttch = ttt[(Math.floor(Math.random() * ttt.length))]

            if (ttch == "rrt" && tttch == "bt" || tttch == "rrt" && ttch == "bt") {
                // rr and bt
                if ((Math.floor(Math.random() * redBc) + 1) <= 100 && (Math.floor(Math.random() * redBc) + 1) >= 1) {
                    if (wt > 0) {
                        rr = rr + 1
                    }
                } else {
                    rr = rr - 1
                }
                if ((Math.floor(Math.random() * blueRc) + 1) <= 100 && (Math.floor(Math.random() * blueRc) + 1) >= 1) {
                    if (wt > 0) {
                        b = b + 1
                    }
                } else {
                    b = b - 1
                }
                rrt = rrt - 1
                bt = bt - 1
            } else if (ttch == "rrt" && tttch == "gt" || tttch == "rrt" && ttch == "gt") {
                // rr and gt
                if ((Math.floor(Math.random() * redGc) + 1) <= 100 && (Math.floor(Math.random() * redGc) + 1) >= 1) {
                    if (wt > 0) {
                        rr = rr + 1
                    }
                } else {
                    rr = rr - 1
                }
                if ((Math.floor(Math.random() * greenRc) + 1) <= 100 && (Math.floor(Math.random() * greenRc) + 1) >= 1) {
                    if (wt > 0) {
                        g = g + 1
                    }
                } else {
                    g = g - 1
                }
                rrt = rrt - 1
                gt = gt - 1
            } else if (ttch == "rrt" && tttch == "ot" || tttch == "rrt" && ttch == "ot") {
                // rr and ot
                if ((Math.floor(Math.random() * redOc) + 1) <= 100 && (Math.floor(Math.random() * redOc) + 1) >= 1) {
                    if (wt > 0) {
                        rr = rr + 1
                    }
                } else {
                    rr = rr - 1
                }
                if ((Math.floor(Math.random() * orangeRc) + 1) <= 100 && (Math.floor(Math.random() * orangeRc) + 1) >= 1) {
                    if (wt > 0) {
                        o = o + 1
                    }
                } else {
                    o = o - 1
                }
                rrt = rrt - 1
                ot = ot - 1
            } else if (ttch == "bt" && tttch == "gt" || tttch == "bt" && ttch == "gt") {
                // bt and gt 
                if ((Math.floor(Math.random() * blueGc) + 1) <= 100 && (Math.floor(Math.random() * blueGc) + 1) >= 1) {
                    if (wt > 0) {
                        b = b + 1
                    }
                } else {
                    b = b - 1
                }
                if ((Math.floor(Math.random() * greenBc) + 1) <= 100 && (Math.floor(Math.random() * greenBc) + 1) >= 1) {
                    if (wt > 0) {
                        g = g + 1
                    }
                } else {
                    g = g - 1
                }
                bt = bt - 1
                gt = gt - 1
            } else if (ttch == "ot" && tttch == "bt" || tttch == "ot" && ttch == "bt") {
                // bt and ot
                if ((Math.floor(Math.random() * blueOc) + 1) <= 100 && (Math.floor(Math.random() * blueOc) + 1) >= 1) {
                    if (wt > 0) {
                        b = b + 1
                    }
                } else {
                    b = b - 1
                }
                if ((Math.floor(Math.random() * orangeBc) + 1) <= 100 && (Math.floor(Math.random() * orangeBc) + 1) >= 1) {
                    if (wt > 0) {
                        o = o + 1
                    }
                } else {
                    o = o - 1
                }
                bt = bt - 1
                ot = ot - 1
            } else if (ttch == "gt" && tttch == "o" || tttch == "gt" && ttch == "o") {
                // gt and ot
                if ((Math.floor(Math.random() * greenOc) + 1) <= 100 && (Math.floor(Math.random() * greenOc) + 1) >= 1) {
                    if (wt > 0) {
                        g = g + 1
                    }
                } else {
                    g = g - 1
                }
                if ((Math.floor(Math.random() * orangeGc) + 1) <= 100 && (Math.floor(Math.random() * orangeGc) + 1) >= 1) {
                    if (wt > 0) {
                        o = o + 1
                    }
                } else {
                    o = o - 1
                }
                gt = gt - 1
                ot = ot - 1
            } else if (ttch == "rrt" && tttch == "rrt") {
                if ((Math.floor(Math.random() * redRc) + 1) <= 100 && (Math.floor(Math.random() * redRc) + 1) >= 1) {
                    if (wt > 0) {
                        rr = rr + 1
                    }
                } else {
                    rr = rr - 1
                }
                if ((Math.floor(Math.random() * redRc) + 1) <= 100 && (Math.floor(Math.random() * redRc) + 1) >= 1) {
                    if (wt > 0) {
                        rr = rr + 1
                    }
                } else {
                    rr = rr - 1
                }
                rrt = rrt - 2
            } else if (ttch == "gt" && tttch == "gt") {
                if ((Math.floor(Math.random() * greenGc) + 1) <= 100 && (Math.floor(Math.random() * greenGc) + 1) >= 1) {
                    if (wt > 0) {
                        g = g + 1
                    }
                } else {
                    g = g - 1
                }
                if ((Math.floor(Math.random() * greenGc) + 1) <= 100 && (Math.floor(Math.random() * greenGc) + 1) >= 1) {
                    if (wt > 0) {
                        g = g + 1
                    }
                } else {
                    g = g - 1
                }
                gt = gt - 2
            } else if (ttch == "bt" && tttch == "bt") {
                if ((Math.floor(Math.random() * blueBc) + 1) <= 100 && (Math.floor(Math.random() * blueBc) + 1) >= 1) {
                    if (wt > 0) {
                        b = b + 1
                    }
                } else {
                    b = b - 1
                }
                if ((Math.floor(Math.random() * blueBc) + 1) <= 100 && (Math.floor(Math.random() * blueBc) + 1) >= 1) {
                    if (wt > 0) {
                        b = b + 1
                    }
                } else {
                    b = b - 1
                }
                bt = bt - 2
            } else if (ttch == "ot" && tttch == "ot") {
                if ((Math.floor(Math.random() * orangeOc) + 1) <= 100 && (Math.floor(Math.random() * orangeOc) + 1) >= 1) {
                    if (wt > 0) {
                        o = o + 1
                    }
                } else {
                    o = o - 1
                }
                if ((Math.floor(Math.random() * orangeOc) + 1) <= 100 && (Math.floor(Math.random() * orangeOc) + 1) >= 1) {
                    if (wt > 0) {
                        o = o + 1
                    }
                } else {
                    o = o - 1
                }
                ot = ot - 2
            } else if (ttch == "rrt" && tttch == "wt" || tttch == "rrt" && ttch == "wt") {
                if ((Math.floor(Math.random() * redWc) + 1) <= 100 && (Math.floor(Math.random() * redWc) + 1) >= 1) {
                    if (wt > 0) {
                        rr = rr + 1
                    }
                } else {
                    rr = rr - 1
                }
                rrt = rrt - 1
                wt = wt - 1
            } else if (ttch == "bt" && tttch == "wt" || tttch == "bt" && ttch == "wt") {
                if ((Math.floor(Math.random() * redWc) + 1) <= 100 && (Math.floor(Math.random() * redWc) + 1) >= 1) {
                    if (wt > 0) {
                        b = b + 1
                    }
                } else {
                    b = b - 1
                }
                bt = bt - 1
                wt = wt - 1
            } else if (ttch == "gt" && tttch == "wt" || tttch == "gt" && ttch == "wt") {
                if ((Math.floor(Math.random() * redWc) + 1) <= 100 && (Math.floor(Math.random() * redWc) + 1) >= 1) {
                    if (wt > 0) {
                        g = g + 1
                    }
                } else {
                    g = g - 1
                }
                gt = gt - 1
                wt = wt - 1
            } else if (ttch == "ot" && tttch == "wt" || tttch == "ot" && ttch == "wt") {
                if ((Math.floor(Math.random() * redWc) + 1) <= 100 && (Math.floor(Math.random() * redWc) + 1) >= 1) {
                    if (wt > 0) {
                        o = o + 1
                    }
                } else {
                    o = o - 1
                }
                ot = ot - 1
                wt = wt - 1
            }
        }
        t = t - 1
    }
    if (rr < 0) {
        rr = 0
    }
    if (b < 0) {
        b = 0
    }
    if (g < 0) {
        g = 0
    }
    if (o < 0) {
        o = 0
    }
    if (rr > 100) {
        rr = 100
    }
    if (b > 100) {
        b = 100
    }
    if (g > 100) {
        g = 100
    }
    if (o > 100) {
        o = 1000
    }
    document.getElementById("timeCycle").innerHTML = `After ${originalT} cycles`;
    document.getElementById("test").innerHTML = `${rr}, red creatures, ${b}, total blue creatures, ${g}, total green creatures, ${o}, total orange creatures`;
}