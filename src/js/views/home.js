import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("home");
    }
    async getHtml(){
        return `
            <div class="container">
            <div class="row d-flex d-flex align-items-center custom-section">
                <div class="col-12 col-lg-4 ">
                    <h2>Home Section</h2>
                    <h3>process</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, itaque quod ut distinctio autem tempora natus in asperiores provident deleniti.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="col-12 col-lg-8">
                    <img src="img/undraw_Problem_solving_re_4gq3.png" alt="team process banner" class="teamImage">
                </div>
            </div>
            </div>
        `
    }
}