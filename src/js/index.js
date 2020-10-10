import '../scss/style.scss';
import './base';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery';

import home from './views/home';
import about from './views/about';
import record from './views/record';
import contact from './views/contact';



const navigateTo= url=>{
    history.pushState(null,null,url);
    router();
};

const router= async ()=>{
    const routers=[
        {path:"/home",view:home},
        {path:"/about",view:about},
        {path:"/record",view:record},
        {path:"/contact",view:contact},
    ]
    //test each route for potential match
    const potentialMatches=routers.map(route=>{
        return {
            route:route,
            isMatch:location.pathname=== route.path
        }
    });
    let match=potentialMatches.find(potentialMatche=>potentialMatche.isMatch);

    if(!match){
        match={
            route:routers[0],
            isMatch: true
        }
    }
    const view=new match.route.view();
    document.querySelector('#section').innerHTML=await view.getHtml();
};
document.body.addEventListener('click',e=>{
    if(e.target.matches("[data-link]")){
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

document.addEventListener("DOMContentLoaded",()=>{
    router();
})
document.addEventListener("load",()=>{
    document.body.addEventListener('click',e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
});

// =========navbar toggle===========

document.querySelector('.navbar-toggler').addEventListener('click',()=>{
    if(!document.querySelector('.bx-menu')){
        document.querySelector('.bx-x-circle').classList.replace('bx-x-circle','bx-menu');
    }
    else
    document.querySelector('.bx-menu').classList.replace('bx-menu','bx-x-circle');
})


// ==========scroll reveal Animation=======

const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})
// =======scroll nav=========
sr.reveal('.navbar-brand',{});
sr.reveal('.org_name',{delay:200});
sr.reveal('.navbar-nav',{delay:400});
sr.reveal('.navlinks',{interval:200});
sr.reveal('.navbar-toggler',{interval:400});
// =======scroll section=====

// sr.reveal('.row',{});
// sr.reveal('.custom-section',{delay:200});
// sr.reveal('.teamImage',{interval:200});

// // =======scroll skills=====
// sr.reveal('.skills__subtitle',{});
// sr.reveal('.skills__text',{delay:200});
// sr.reveal('.skills__data',{interval:200});
// sr.reveal('.skills__img',{delay:400}); 

// // =======scroll works=====
// sr.reveal('.work__img',{interval:200});
// // =======scroll contacts=====
// sr.reveal('.contact__input',{interval:200});