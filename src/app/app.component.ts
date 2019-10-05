import { Component, OnInit } from '@angular/core';

export interface Fact{
  link: string;
  header: string;
  subHeader: string;
  caption: string;
  paragraph: string;
  data: string;
  imgSrc: string;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {
  facts: Fact[];
  headerImageSrc = 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2018/01/04111306/indonesia_sulawesi_171067.jpg'
  constructor(){
    this.facts = [
      {
        link: '#environment', 
        header: 'environment', 
        subHeader: 'facts', 
        caption: '', 
        paragraph: '', 
        data: '',
        imgSrc: 'https://missoulacurrent.com/wp-content/uploads/2018/12/coal.jpg',
      },
      {
        link: '#methane', 
        header: 'methane', 
        subHeader: 'facts', 
        caption: 'Cow Farts Have ‘Larger Greenhouse Gas Impact’ Than Previously Thought; Methane Pushes Climate Change', 
        paragraph: '', 
        data: '',
        imgSrc: 'https://news.harvard.edu/wp-content/uploads/2019/08/Amazon_Fire.jpg?w=1600&h=900&crop=1',
      },
      {
        link: '#water', 
        header: 'water', 
        subHeader: 'facts', 
        caption: 'One hambureger is the equivelant of 3000 liters of water', 
        paragraph: '', 
        data: '',
        imgSrc: 'https://missoulacurrent.com/wp-content/uploads/2018/12/coal.jpg',
      },
    ];
  }
  ngOnInit(){
  }
}
