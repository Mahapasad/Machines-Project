window.onload = function(){
const body = document.getElementById('body')
const button = document.getElementById('submit')
button.addEventListener('click', () => {
    console.log("I'm here")
    var Vsc = parseFloat(document.getElementById('Vsc').value)
    var Isc = parseFloat(document.getElementById('Isc').value)
    var Wc = parseFloat(document.getElementById('Wc').value)
    var V1 = parseFloat(document.getElementById('V1').value)
    var I0 = parseFloat(document.getElementById('I0').value)
    var Wi = parseFloat(document.getElementById('Wi').value)
    var n = parseFloat(document.getElementById('n').value)
    //calculations
    var R01 = (Wc/(Isc*Isc)).toFixed(3)
    var Z01 = (Vsc/Isc).toFixed(3)
    var X01 = (Math.sqrt(Z01*Z01 - R01*R01)).toFixed(3)
    var pf = (Wi/(V1*I0)).toFixed(3)
    var Iw = (Wi/V1).toFixed(3)
    var Im = (Math.sqrt(I0*I0 - Iw*Iw)).toFixed(3)
    var R0 = (V1/Iw).toFixed(3)
    var X0 = (V1/Im).toFixed(3)
    var I1 = (I0/(n+1)).toFixed(3)
    var I2 = ((n*I0)/(n+1)).toFixed(3)
    if(I0<=Iw || V1 == 0 || Iw == 0 || Im == 0 || I0 == 0 || Isc == 0 || Z01<=R01){
        body.innerHTML=`
        <div style="
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding:0;
        margin: 0;
        text-align: center;
        text-transform: uppercase; 
        background-color: black;
        ">
        <h1 style="
        color:blue;
        font-size: 90px;
        font-weight: 600;
        "
        >Invalid Input</h1>
        <h2><a 
        style="
        text-decoration: none;
        color: yellow;
        font-size: 40px;
        font-weight: 600;
        padding-top: 10%;
        " href="index.html">Click here to re-enter the values</a></h2>
        </div>
        `
    }
    else{
        body.innerHTML=`
    <div style="
        background-color: white;
        height: 100vh;
    ">
    <div style="
        background-color: white;
        height: 100vh;
    ">
    <div style="
    background-color: white;
    display: inline-block;
    ">
        <p
        style="
        position:absolute;
        top:290px;
        left:255px;
        ">V1 = ${V1}V
        </p>
        <p
        style="
        position:absolute;
        top:142px;
        left:892px;
        ">R01 = ${R01} A</p>

        <p style="
        position:absolute;
        top:142px;
        left:535px;
        ">I1: ${I1} A</p>


        <p
        style="
        position:absolute;
        top:142px;
        left:1050px;
        ">X01 = ${X01} ohm</p>
        <p style="
        position:absolute;
        top:142px;
        left:700px;
        ">I2: ${I2} A</p>
        <p
        style="
        position:absolute;
        top:270px;
        left:440px;
        ">Iw = ${Iw} A</p>


        <p
        style="
        position:absolute;
        top:220px;
        left:524px;
        ">I0 = ${I0} A</p>


        <p
        style="
        position:absolute;
        top:270px;
        left:725px;
        ">Iu = ${I0-Iw} A</p>

        <p
        style="
        position:absolute;
        top:310px;
        left:434px;
        ">R0 = ${R0} ohm</p>
        <p
        style="
        position:absolute;
        top:310px;
        left:720px;
        ">X0 = ${X0} ohm</p>

        <p
        style="
        position:absolute;
        top:290px;
        left: 1125px;
        ">V2 = ${Vsc}v
        </p>

        <img src="circuit-2.png" alt="Circuit Diagram"
        style=
        "margin-left:15%;
        margin-top:12%;
        "
        />

        <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;">

        <h2>Open-Circuit Test</h3>
            <table>
                <tr>
                    <th>V1 (in V)</th>
                    <th>I0 (in A)</th>
                    <th>Wi (in W)</th>
                    <th>Power Factor</th>
                    <th>Iw (in A)</th>
                    <th>Im (in A)</th>
                    <th>R0 (in ohm)</th>
                    <th>X0 (in ohm)</th>
                </tr>
                <tr>
                    <th>${V1}</th>
                    <th>${I0}</th>
                    <th>${Wi}</th>
                    <th>${pf}</th>
                    <th>${Iw}</th>
                    <th>${Im}</th>
                    <th>${R0}</th>
                    <th>${X0}</th>
                </tr>
            </table>
        <h2>Short-Circuit Test</h3>
            <table>
                <tr>
                    <th>Vsc (in V)</th>
                    <th>Isc (in A)</th>
                    <th>Wc (in W)</th>
                    <th>R01 (in ohm)</th>
                    <th>Z01 (in ohm)</th>
                    <th>X01 (in ohm)</th>
                </tr>
                <tr>
                    <th>${Vsc}</th>
                    <th>${Isc}</th>
                    <th>${Wc}</th>
                    <th>${R01}</th>
                    <th>${Z01}</th>
                    <th>${X01}</th>
                </tr>
            </table>
        </div>
        </div>
    </div>
    `
    }



    

})
}
