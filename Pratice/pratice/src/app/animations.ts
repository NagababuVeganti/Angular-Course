import { animate, state, style, transition, trigger } from "@angular/animations";

 export let fade =trigger('fade',[

    state('void',style({opacity:0})),

    //Bi directional
    transition("void <=> *",[
      animate(2000) 
    ])
  ]);

  export let slide =trigger('slide',[

    //state('void',style({opacity:0})),

    //Bi directional
    transition("void => *",[
      animate(500,style({transform:'translateX(-10px)'})) 
    ]),
    transition("* => void",[
        animate(500,style({transform:'translateX(-100px)'})) 
      ])
  ]); 