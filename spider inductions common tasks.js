// assigning variables:

const s = document.querySelector('.start')
const d = document.querySelector('#div')
const sq = document.querySelectorAll('.square:nth-of-type(n)')

let i = 0
let k = 1

let j0,j1,j2,j3,j4,j5,j6,j7,j8
j0=j1=j2=j3=j4=j5=j6=j7=j8=2

//initial message:

setTimeout(()=>{

    s.remove()

},3000)

//assigner timer for chances of both players:

if(i===0){

    setTimeout(()=>{

        i = 1

    },15000)

}

else if(i===1){

    setTimeout(()=>{

        i = 0

    },15000)

}

//adding event listeners for all boxes:

sq[0].addEventListener('click',(e)=>{

    //marking spaces:
    
    if(i===0)
        {

        const h01 = document.createElement('h1')
        h01.appendChild(document.createTextNode(`X`))
        sq[0].appendChild(h01)
        h01.classList.add('x')

        i = 1

        const p01 = document.createElement('p')
        p01.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p01)
        p01.classList.add('start')
        setTimeout(()=>{
            p01.remove()
        },3000)

        j0 = 1

        }

    else if(i===1)
        {

        const h02 = document.createElement('h1')
        h02.appendChild(document.createTextNode(`O`))
        sq[0].appendChild(h02)
        h02.classList.add('o')

        i = 0

        const p02 = document.createElement('p')
        p02.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p02)
        p02.classList.add('start')
        setTimeout(()=>{
            p02.remove()
        },3000)

        j0 = 0

        }


    //checking for winning condition:

    if(j0===j1 && j1===j2 && j0===1)
        {   

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }
    
    else if(j0===j3 && j3===j6 && j0===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }
    
    else if(j0===j4 && j4===j8 && j0===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j0===j1 && j1===j2 && j0===0)
            {   

                i = 2

                const end = document.createElement('p')
                end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
                d.appendChild(end)
                end.classList.add('player')

                k = 0

            }
    
    else if(j0===j3 && j3===j6 && j0===0)
            {

                i = 2

                const end = document.createElement('p')
                end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
                d.appendChild(end)
                end.classList.add('player')

                k = 0

            }

    else if(j0===j4 && j4===j8 && j0===0)
            {
    
                i = 2

                const end = document.createElement('p')
                end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
                d.appendChild(end)
                end.classList.add('player')

                k = 0
    
            }

    //checking for tie condition:

    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
            {

                const tie = document.createElement('p')
                tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
                d.appendChild(tie)
                tie.classList.add('player') 

            }

} , { once : true})

sq[1].addEventListener('click',(e)=>{

    //marking spaces;

    if(i===0)
        {

        const h11 = document.createElement('h1')
        h11.appendChild(document.createTextNode(`X`))
        sq[1].appendChild(h11)
        h11.classList.add('x')

        i = 1

        const p11 = document.createElement('p')
        p11.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p11)
        p11.classList.add('start')
        setTimeout(()=>{
            p11.remove()
        },3000)

        j1 = 1

        }

    else if(i===1)
        {

        const h12 = document.createElement('h1')
        h12.appendChild(document.createTextNode(`O`))
        sq[1].appendChild(h12)
        h12.classList.add('o')

        i = 0

        const p12 = document.createElement('p')
        p12.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p12)
        p12.classList.add('start')
        setTimeout(()=>{
            p12.remove()
        },3000)

        j1 = 0

        }


    //checking for winning condition:

    if(j0===j1 && j1===j2 && j1===1)
        {   

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j0===j1 && j1===j2 && j1===0)
        {   

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j1===j4 && j4===j7 && j1===1)
        {

            
            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j1===j4 && j4===j7 && j1===0)
        {

                
            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    //checking for tie condition:
    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {

            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 

        }

}, { once : true})

sq[2].addEventListener('click',(e)=>{

    //marking spaces:

    if(i===0)
        {

        const h21 = document.createElement('h1')
        h21.appendChild(document.createTextNode(`X`))
        sq[2].appendChild(h21)
        h21.classList.add('x')

        i = 1

        const p21 = document.createElement('p')
        p21.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p21)
        p21.classList.add('start')
        setTimeout(()=>{
            p21.remove()
        },3000)

            j2 = 1


        }

    else if(i===1)
        {

        const h22 = document.createElement('h1')
        h22.appendChild(document.createTextNode(`O`))
        sq[2].appendChild(h22)
        h22.classList.add('o')

        i = 0

        const p22 = document.createElement('p')
        p22.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p22)
        p22.classList.add('start')
        setTimeout(()=>{
            p22.remove()
        },3000)

        j2 = 0

        }

    //checking for winning condition:

    if(j0===j1 && j1===j2 && j2===1)
        {   

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k=0

        }

    else if(j0===j1 && j1===j2 && j2===0)
        {   

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k=0

        }

    else if(j2===j5 && j5===j8 && j2===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j5 && j5===j8 && j2===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j4 && j4===j6 && j2===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j4 && j4===j6 && j2===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)  
            end.classList.add('player')

            k = 0

        }

    //checking for tie condition
    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {
                
            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 

        }

}, { once : true})

sq[3].addEventListener('click',(e)=>{

    //marking spaces:

    if(i===0)
        {

        const h31 = document.createElement('h1')
        h31.appendChild(document.createTextNode(`X`))
        sq[3].appendChild(h31)
        h31.classList.add('x')

        i = 1

        const p31 = document.createElement('p')
        p31.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p31)
        p31.classList.add('start')
        setTimeout(()=>{
            p31.remove()
        },3000)

            j3 = 1


        }

    else if(i===1)
        {

        const h32 = document.createElement('h1')
        h32.appendChild(document.createTextNode(`O`))
        sq[3].appendChild(h32)
        h32.classList.add('o')

        i = 0

        const p32 = document.createElement('p')
        p32.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p32)
        p32.classList.add('start')
        setTimeout(()=>{
            p32.remove()
        },3000)

        j3 = 0

        }

    //checking for winning condition:

    if(j0===j3 && j3===j6 && j3===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j0===j3 && j3===j6 && j3===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j3===j4 && j4===j5 && j3===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0
        }

    else if(j3===j4 && j4===j5 && j3===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    //checking for tie condition:

    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {
                
            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 

        }

}, { once : true})

sq[4].addEventListener('click',(e)=>{

    //marking spaces:

    if(i===0)
        {

        const h41 = document.createElement('h1')
        h41.appendChild(document.createTextNode(`X`))
        sq[4].appendChild(h41)
        h41.classList.add('x')

        i = 1

        const p41 = document.createElement('p')
        p41.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p41)
        p41.classList.add('start')
        setTimeout(()=>{
            p41.remove()
        },3000)

            j4 = 1

        }

    else if(i===1)
        {

        const h42 = document.createElement('h1')
        h42.appendChild(document.createTextNode(`O`))
        sq[4].appendChild(h42)
        h42.classList.add('o')

        i = 0

        const p42 = document.createElement('p')
        p42.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p42)
        p42.classList.add('start')
        setTimeout(()=>{
            p42.remove()
        },3000)

        j4 = 0

        }

    //checking for winning condition:

    if(j1===j4 && j4===j7 && j4===1)
        {
            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j1===j4 && j4===j7 && j4===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        } 
    
    else if(j3===j4 && j4===j5 && j4===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j3===j4 && j4===j5 && j4===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0
    
        }

    else if(j0===j4 && j4===j8 && j4===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j0===j4 && j4===j8 && j4===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j4 && j4===j6 && j4===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }
    
    else if(j2===j4 && j4===j6 && j4===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)  
            end.classList.add('player')

            k = 0

        }

    //checking for tie condition:

    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {
            
            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 

        }

}, { once : true})

sq[5].addEventListener('click',(e)=>{

    //marking spaces:

    if(i===0)
        {

        const h51 = document.createElement('h1')
        h51.appendChild(document.createTextNode(`X`))
        sq[5].appendChild(h51)
        h51.classList.add('x')

        i = 1

        const p51 = document.createElement('p')
        p51.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p51)
        p51.classList.add('start')
        setTimeout(()=>{
            p51.remove()
        },3000)

            j5 = 1


        }

    else if(i===1)
        {

        const h52 = document.createElement('h1')
        h52.appendChild(document.createTextNode(`O`))
        sq[5].appendChild(h52)
        h52.classList.add('o')

        i = 0

        const p52 = document.createElement('p')
        p52.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p52)
        p52.classList.add('start')
        setTimeout(()=>{
            p52.remove()
        },3000)

        j5 = 0

        }

    //checking for winning condition:

    if(j3===j4 && j4===j5 && j5===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0


        }

    else if(j3===j4 && j4===j5 && j5===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0
    
        }

    else if(j2===j5 && j5===j8 && j5===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j5 && j5===j8 && j5===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    //checking for tie condition:

    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {
            
            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 

        }

}, { once : true})

sq[6].addEventListener('click',(e)=>{

    //marking spaces:

    if(i===0)
        {

        const h61 = document.createElement('h1')
        h61.appendChild(document.createTextNode(`X`))
        sq[6].appendChild(h61)
        h61.classList.add('x')

        i = 1

        const p61 = document.createElement('p')
        p61.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p61)
        p61.classList.add('start')
        setTimeout(()=>{
            p61.remove()
        },3000)

            j6 = 1


        }

    else if(i===1)
        {

        const h62 = document.createElement('h1')
        h62.appendChild(document.createTextNode(`O`))
        sq[6].appendChild(h62)
        h62.classList.add('o')

        i = 0

        const p62 = document.createElement('p')
        p62.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p62)
        p62.classList.add('start')
        setTimeout(()=>{
            p62.remove()
        },3000)

        j6 = 0

        }

    //checking for winning condition:

    if(j0===j3 && j3===j6 && j6===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j0===j3 && j3===j6 && j6===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j6===j7 && j7===j8 && j6===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j6===j7 && j7===j8 && j6===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j4 && j4===j6 && j6===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j4 && j4===j6 && j6===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)  
            end.classList.add('player')

            k = 0

        }
    
    //checking for tie condition:

    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {

            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 
        }


    

}, { once : true})

sq[7].addEventListener('click',(e)=>{

    //marking spaces:

    if(i===0)
        {

        const h71 = document.createElement('h1')
        h71.appendChild(document.createTextNode(`X`))
        sq[7].appendChild(h71)
        h71.classList.add('x')

        i = 1

        const p71 = document.createElement('p')
        p71.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p71)
        p71.classList.add('start')
        setTimeout(()=>{
            p71.remove()
        },3000)

        j7 = 1


        }

    else if(i===1)
        {

        const h72 = document.createElement('h1')
        h72.appendChild(document.createTextNode(`O`))
        sq[7].appendChild(h72)
        h72.classList.add('o')

        i = 0

        const p72 = document.createElement('p')
        p72.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p72)
        p72.classList.add('start')
        setTimeout(()=>{
            p72.remove()
        },3000)

        j7 = 0

        }

    //checking for winning condition:

    if(j1===j4 && j4===j7 && j7===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j1===j4 && j4===j7 && j7===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        } 

    else if(j6===j7 && j7===j8 && j7===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j6===j7 && j7===j8 && j7===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    //checking for tie condition:

    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {
            
            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 

        }
    
}, { once : true})

sq[8].addEventListener('click',(e)=>{

    //marking spaces:

    if(i===0)
        {

        const h81 = document.createElement('h1')
        h81.appendChild(document.createTextNode(`X`))
        sq[8].appendChild(h81)
        h81.classList.add('x')

        i = 1

        const p81 = document.createElement('p')
        p81.appendChild(document.createTextNode(`player-2'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p81)
        p81.classList.add('start')
        setTimeout(()=>{
            p81.remove()
        },3000)

        j8 = 1

        }

    else if(i===1)
        {

        const h82 = document.createElement('h1')
        h82.appendChild(document.createTextNode(`O`))
        sq[8].appendChild(h82)
        h82.classList.add('o')

        i = 0

        const p82 = document.createElement('p')
        p82.appendChild(document.createTextNode(`player-1'chance , click on any of the empty box(within 15secs from the time this msg has been displayed to avoid chance skip)`))
        d.appendChild(p82)
        p82.classList.add('start')
        setTimeout(()=>{
            p82.remove()
        },3000)

        j8 = 0

        }

    //checking for winning condition:

    if(j2===j5 && j5===j8 && j8===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j2===j5 && j5===j8 && j8===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j6===j7 && j7===j8 && j8===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j6===j7 && j7===j8 && j8===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j0===j4 && j4===j8 && j8===1)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-1 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    else if(j0===j4 && j4===j8 && j8===0)
        {

            i = 2

            const end = document.createElement('p')
            end.appendChild(document.createTextNode(`GAME OVER!!! PLAYER-2 IS THE WINNER!!! CONGRATULATIONS!!!`))
            d.appendChild(end)
            end.classList.add('player')

            k = 0

        }

    //checking for tie condition:

    if(k===1 && j0!=2 && j1!=2 && j2!=2 && j3!=2 && j4!=2 && j5!=2 && j6!=2 && j7!=2 && j8!=2)
        {
            
            const tie = document.createElement('p')
            tie.appendChild(document.createTextNode(`ITS A TIE!!! GOOD GAME INDEED!!!`))
            d.appendChild(tie)
            tie.classList.add('player') 

        }
            
}, { once : true})




        
        



        







