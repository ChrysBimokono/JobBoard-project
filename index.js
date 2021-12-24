/*
1: send on AJAX request
2: test that request to make sure it worked
3: use the data to create html

*/

const remote_url= 'https://remoteok.com/api'
// create a function to get our data
 async function getData () {
    const response=  await fetch(remote_url);
    const data=  await response.json();
    console.log(data)
    var container= document.getElementById('container')
data.slice(1).forEach(function(row, i) {
    var rowDiv= document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.innerHTML= `
    <div class= "left-section">
        <h5 class="company">${row.company}</h5>
        </h3 class="position">${row.position}</h3>
        </p class="location">${row.location}</p>
    </div>
    <div class= "mid-section">
    ${row.tags.map(function(tag){
        return ` <div class="tag"> ${tag} </div>`
    }).join('')}
    </div>
    <div class="mid-right-section">
       ${new Date(row.date).toLocaleString()}
    </div>
    <div class= "right-section">
    <a href=${row.url}
       <button class="apply">Apply</button
    </a>
    </div>
    `;
    container.appendChild(rowDiv)
});
}
getData()


// Event Listener with toggle on hamburger sign
var menuButton= document.getElementsByClassName('mobile-nav-toggle')[0];
var PrimaryNav= document.getElementsByClassName('primary-navigation')[0]
console.log(menuButton)
menuButton.addEventListener('click',function(){
    console.log('clicked')
    var visibility=  PrimaryNav.getAttribute('data-visible');
    console.log(visibility)
    if(visibility === 'false'){
        PrimaryNav.setAttribute("data-visible",true);
        PrimaryNav.setAttribute("aria-expanded", true)
         PrimaryNav.style.transform='none'
    } else{
        PrimaryNav.setAttribute("data-visible",false);
        PrimaryNav.setAttribute("aria-expanded", false)
         PrimaryNav.style.transform='translateX(100%)'
    }

    console.log(PrimaryNav.getAttribute('aria-expanded'))
    
})
