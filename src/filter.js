const $select = document.getElementById('select').querySelectorAll('button');
const $selected = document.getElementById('selected');

let arr = [];

$select.forEach((e) => {
    e.addEventListener('click', () => {

        let index = arr.indexOf(e.innerText);
		
        if(index == -1){
            arr.push(e.innerText);
            e.style.background = 'red';
        } else{
            if(index == 0){
                arr.shift();
                e.style.background = '#dfdfdf';
				
            } else{
                arr.splice(index, index)
                e.style.background = '#dfdfdf';
            }
        }
		

        $selected.innerHTML = ''
		
		if(arr.length <= 0) {
			const p = document.createElement('p');
            p.innerText = "Жанр";
			
            $selected.appendChild(p);
		} else{
			arr.forEach((e) => {
            const p = document.createElement('p');
            p.innerText = e;
			
            $selected.appendChild(p);
        })
		}
		
        

    })
})