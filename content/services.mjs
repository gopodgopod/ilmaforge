// Original ILMA service guides. Project examples refer to published portfolio work.
export const services = [
  {
    slug: '3d-product-visualisation', label: '3D Product Visualisation',
    title: '3D product visualisation: make every detail count.',
    description: 'How ILMA approaches 3D product visualisation: accurate models, considered materials, lighting and CGI imagery built around a clear product story.',
    intro: 'Before a product can persuade, people need to understand it. We use 3D product visualisation to give shape, materials and small design decisions the attention they deserve — from a single still image to a complete animated product story.',
    hero: {src: '/assets/duolife/01-collagen-hero.jpg', width: 2020, height: 738, alt: 'DuoLife Collagen packaging rendered in soft light', caption: 'DuoLife — product, material and light working together.'},
    sections: [
      {id: 'the-product', heading: 'Start with what makes the product different.', paragraphs: [
        'A product render is a decision about what the viewer should notice. The texture of a cap, the transparency of a spool or the connection between a tabletop and its legs can each become the focus of a different story. Our starting point is the communication brief: who will see the image, where will it appear, and which feature should stay with them afterwards?',
        'This helps us choose between a clean, descriptive view and a more atmospheric composition. An e-commerce image needs a clear silhouette and readable packaging. A campaign image can use a stronger camera angle, a designed environment or an unexpected arrangement. The product remains the reference point in both cases.'
      ]},
      {id: 'modelling', heading: 'Build a model that holds up close.', paragraphs: [
        'The modelling stage turns available references into a usable digital asset. Depending on the project, the starting material can include CAD data, drawings, packaging artwork, photographs or the physical object. We review what is available before deciding which surfaces need rebuilding and which details will actually be visible in the final images.',
        'Accurate proportions matter more than adding detail everywhere. Edges need to catch the light, transparent parts need believable thickness, and labels need to follow the surface correctly. For an animation, we also consider how the object is assembled so its parts can move independently when the story calls for it.'
      ], figure: {src:'/assets/posnord/07-model-wireframe.png', width:1536, height:1920, alt:'Wireframe view of the Posnord table model', caption:'Posnord — the structure behind the finished product image.'}},
      {id: 'materials', heading: 'Use materials and lighting to explain the object.', paragraphs: [
        'Materials are part of product communication. A glass jar should behave differently from a matte carton; a transparent plastic spool should reveal its construction without losing its outline. We balance reflection, roughness, colour and transparency, then test them under the lighting intended for the final scene.',
        'Lighting brings that work into focus. Broad reflections can describe a curved surface, while a smaller highlight can reveal an edge or embossed detail. We build the composition around those relationships rather than applying the same lighting setup to every product. Test renders make these decisions visible while changes are still practical.'
      ]},
      {id: 'reusable-assets', heading: 'Think beyond a single image.', paragraphs: [
        'A carefully prepared model can become the basis for several deliverables. A campaign may need a wide website visual, a vertical social edit, a detail crop and a packaging variation. Planning those uses early helps us protect important features and leave appropriate space for typography.',
        'Reusability does not mean every image has to look the same. It means the geometry, artwork and materials have a consistent foundation. When a product range changes, that foundation can support new lighting, compositions and animations without starting every part of the production again.'
      ]}
    ],
    examples: [
      {slug:'posnord', name:'Posnord', text:'A product animation that separates the table into its components to explain design and construction.', image:'/assets/posnord/03-table-perspective.png', width:1500, height:1500},
      {slug:'favorite', name:'Favorite', text:'A transparent spool, simulated fishing braid and a reusable 3D asset for a concise product presentation.', image:'/assets/favorite/03-braid-spool.jpg', width:1500, height:1500}
    ],
    closing: 'For a new 3D product visualisation project, useful starting materials include product references, packaging artwork, intended formats and a description of the audience. We can then discuss the right level of realism, the images needed and how the asset could support future communication.'
  },
  {
    slug:'cgi-advertising-films', label:'CGI Advertising Films',
    title:'CGI advertising films: give the product a story.',
    description:'Explore ILMA’s approach to CGI advertising films, from the first creative idea and storyboard to 3D animation, lighting, editing and campaign formats.',
    intro:'An advertising film has only a short time to make its point. CGI gives us room to design that moment: a product can open, assemble, travel through an imagined environment or reveal details a camera could never reach.',
    hero:{src:'/assets/favorite/01-hero.jpg', width:2020, height:832, alt:'Favorite X1 fishing braid and transparent product spool', caption:'Favorite — a focused product story built in 3D.'},
    sections:[
      {id:'the-idea', heading:'Find one idea worth following.', paragraphs:[
        'We begin by asking what the film should communicate. A launch might need to introduce an unfamiliar object. An established product might need a fresh way to show a familiar benefit. Identifying that purpose helps us decide what belongs in the film and what would only add noise.',
        'The creative direction connects the message to a visual idea. That may be an exploded product view, a transformation between materials, a distinctive camera move or a complete environment. We look for a relationship between the image and the product, so the film feels specific to the brief rather than interchangeable with another campaign.'
      ]},
      {id:'planning', heading:'Work out the film before the final render.', paragraphs:[
        'Storyboards establish the order of ideas. An animatic brings those frames into time, allowing us to discuss camera movement, pacing and the length of each shot. It is a practical way to find out whether the sequence makes sense before committing to detailed lighting and rendering.',
        'At this stage, we also consider delivery formats. A composition that works on a wide website banner may not survive a vertical crop. Planning the hero shot, key information and product position across formats helps keep the campaign recognisable wherever it appears.'
      ], figure:{src:'/assets/ghx/07-01.webp',width:1200,height:421,alt:'GHX coin surrounded by luminous red trails',caption:'GHX — camera movement and a repeated visual language connect the shots.'}},
      {id:'production', heading:'Make animation, materials and light tell the same story.', paragraphs:[
        'Once the direction is established, we develop the 3D assets, animation and scene design together. The movement of the product affects what the lighting needs to reveal. The material affects how quickly a highlight travels across a surface. Those details should reinforce the same visual idea.',
        'The range of techniques depends on the film. Hard surface modelling can describe precise construction; simulation can bring flexible materials or repeated elements into a shot. We use those tools where they serve the sequence. The aim is a clear product presentation with a considered atmosphere, not a collection of disconnected effects.'
      ]},
      {id:'finishing', heading:'Finish for the place people will watch.', paragraphs:[
        'Editing and compositing bring the rendered shots into a complete film. We refine transitions, balance colour, integrate graphic information and check that the product remains readable throughout. A film intended to play silently also needs to communicate through images and timing alone.',
        'The main edit can become the starting point for shorter versions and alternate formats when those are part of the brief. We consider openings, endings and loops individually: a social post, a website film and an event screen do not always need the same structure. Defining those uses early keeps the final delivery focused.'
      ]}
    ],
    examples:[
      {slug:'favorite',name:'Favorite',text:'A short promotional animation built around the fishing braid, its spool and product information.',image:'/assets/favorite/03-braid-spool.jpg',width:1500,height:1500},
      {slug:'ghx-trailer',name:'GHX — Trailer',text:'An animated explanation using coins, a designed 3D environment and a consistent red visual world.',image:'/assets/ghx/14-04.webp',width:1400,height:788}
    ],
    closing:'A useful film brief includes the core message, the product references, expected duration, placement and required formats. Share what is already decided and what is still open, and we can shape a CGI production approach around the actual communication task.'
  },
  {
    slug:'motion-design',label:'Motion Design',
    title:'Motion design: turn an idea into a sequence.',
    description:'How ILMA uses motion design to connect ideas, explain products and create a consistent visual rhythm through animation, typography and scene transitions.',
    intro:'Movement changes how we read an image. It can direct attention, explain a connection or build anticipation. Our approach to motion design brings composition and timing together so each movement has a reason to be there.',
    hero:{src:'/assets/ghx/07-01.webp',width:1200,height:421,alt:'GHX animated sequence with red light trails and a moving coin',caption:'GHX — motion as a connection between information and atmosphere.'},
    sections:[
      {id:'purpose',heading:'Decide what the movement needs to do.',paragraphs:[
        'Motion design starts with a communication problem. The audience may need to understand an unfamiliar process, recognise a brand or follow a transition from one idea to the next. We identify that purpose before choosing an animation style. A quiet product detail and an energetic sports intro ask for different decisions.',
        'This gives us a way to judge the work throughout production. Does the movement make the important information easier to follow? Does it support the tone of the piece? Does a transition connect two ideas, or simply interrupt them? These questions help keep a sequence coherent as the design develops.'
      ]},
      {id:'design-language',heading:'Build a visual language that can move.',paragraphs:[
        'Composition, typography, colour and 3D form establish the visual vocabulary. We consider how those elements enter, interact and leave the frame. A shape that works in a still image may need different spacing or proportions once the camera moves around it or text needs time to be read.',
        'Style frames help establish the direction. Simple motion tests then show how that direction behaves over time. This combination allows us to discuss the look and the rhythm together, rather than treating animation as something applied to a finished graphic at the end.'
      ]},
      {id:'timing',heading:'Use timing to guide attention.',paragraphs:[
        'Timing determines which detail the viewer notices first and how long it remains important. Acceleration can make a transition feel decisive. A pause can give a product feature room to register. Repetition can create a pattern that makes the next change easier to understand.',
        'We review motion at the intended speed and in the intended context. A sequence designed for a large event screen can allow a different pace from a short mobile edit. Readability matters in both cases, particularly when typography and a moving product share the frame.'
      ],figure:{src:'/assets/favorite/04-label-detail.jpg',width:1000,height:366,alt:'Favorite product label with typography integrated into the 3D spool',caption:'Favorite — product detail and graphic information share the frame.'}},
      {id:'connected-deliverables',heading:'Design a sequence that survives different formats.',paragraphs:[
        'Motion design often needs to work as a family of outputs. An intro may lead to scene transitions; a product animation may lead to a loop and several shorter edits. We plan which visual elements remain consistent and which need to change with the format.',
        'That can mean adjusting the framing, typography or duration for each version. The goal is not to force every output into one composition. It is to give them a shared identity: a recognisable rhythm, a consistent treatment of space and a clear relationship between the graphics and the subject.'
      ]}
    ],
    examples:[
      {slug:'canal-plus',name:'CANAL+',text:'A speedway show intro and scene transitions, connecting the channel identity with the energy of the sport.',image:'/assets/canal-plus/01-speedway-hero.jpg',width:2020,height:865},
      {slug:'ghx-trailer',name:'GHX — Trailer',text:'A sequence that combines 3D imagery, graphic information and transitions to explain an unfamiliar subject.',image:'/assets/ghx/14-03.webp',width:1400,height:788}
    ],
    closing:'For a motion design brief, tell us what the audience needs to understand, where the animation will appear and which brand assets already exist. We can then discuss a visual direction, the required sequence and the versions needed for delivery.'
  },
  {
    slug:'visual-effects',label:'Visual Effects',
    title:'Visual effects: make the imagined feel connected.',
    description:'Inside ILMA’s approach to visual effects for CGI and product films: simulation, lighting, compositing and effects that support the visual story.',
    intro:'An effect works best when it belongs to the scene. We approach visual effects as part of the overall image — connecting motion, materials, lighting and compositing to help an idea feel coherent on screen.',
    hero:{src:'/assets/ghx/14-04.webp',width:1400,height:788,alt:'GHX symbol in a red illuminated environment with glowing motion trails',caption:'GHX — light, atmosphere and motion designed as one image.'},
    sections:[
      {id:'story',heading:'Give the effect a job in the story.',paragraphs:[
        'Visual effects can reveal something that would be difficult to photograph, guide attention through a scene or create a world around a product. We start by identifying which of those roles is needed. That decision shapes both the effect and the level of complexity that makes sense for the shot.',
        'A glow can help define a route through a dark environment. A simulation can describe how a flexible material behaves. A change in atmosphere can connect two stages of a film. We look for a clear purpose first, then develop the technique around the intended result.'
      ]},
      {id:'behaviour',heading:'Choose how the effect should behave.',paragraphs:[
        'Believable behaviour begins with observation. Even a stylised scene needs rules for how objects move, how light travels across a surface and how different elements respond to one another. We use references and early tests to establish those rules before refining the final image.',
        'The production method depends on the shot. Some elements benefit from physical simulation; others are better controlled through animation or compositing. The Favorite spool, for example, uses simulated braid to describe a real product feature. The technique supports the object rather than becoming an unrelated spectacle.'
      ],figure:{src:'/assets/favorite/03-braid-spool.jpg',width:1500,height:1500,alt:'Lime fishing braid wound around a transparent Favorite spool',caption:'Favorite — simulated material grounded in a physical product.'}},
      {id:'integration',heading:'Make the separate elements belong together.',paragraphs:[
        'An effect rarely succeeds in isolation. Its brightness, colour, sharpness and movement have to relate to the rest of the frame. In a 3D sequence, we consider those relationships during scene development and lighting. Compositing then gives us a way to refine the balance across the finished shots.',
        'Small decisions matter here. A bright trail should not erase the silhouette of the product. An atmospheric layer should create depth without hiding the action. Reflections and highlights need to reinforce the position of the light. We review the complete image, not just the effect layer.'
      ]},
      {id:'review',heading:'Test the shot in motion, then in the edit.',paragraphs:[
        'A single frame can look convincing while a sequence still feels disconnected. We review effects at playback speed to check continuity, rhythm and the relationship with the camera. Early low-detail tests help us adjust behaviour before investing in final rendering.',
        'The final check happens in the edit. We compare contrast, colour and pacing across adjacent shots, refine the compositing and check that the effect remains legible at the delivery size. This is especially useful for films that need both wide and vertical versions, where the same visual event can occupy very different amounts of screen space.'
      ]}
    ],
    examples:[
      {slug:'ghx-trailer',name:'GHX — Trailer',text:'Red light trails, an illuminated environment and graphic elements developed around a consistent 3D world.',image:'/assets/ghx/14-02.webp',width:1400,height:788},
      {slug:'favorite',name:'Favorite',text:'A fishing braid simulation used to explain the way the product wraps around its spool.',image:'/assets/favorite/02-spool-detail.jpg',width:1000,height:1000}
    ],
    closing:'If you are planning a film with visual effects, share the intended action, available imagery and any visual references. We can discuss which elements need to be built in 3D, which can be handled in compositing and how they should work together in the final sequence.'
  },
  {
    slug:'brand-identity-in-motion',label:'Brand Identity in Motion',
    title:'Brand identity in motion: recognition over time.',
    description:'How ILMA translates a brand’s identity into motion through logo animation, timing, materials, typography and connected animated applications.',
    intro:'A brand is experienced through a sequence of moments, not only a still logo. We explore how an existing identity can behave in motion — how it arrives, moves between scenes and remains recognisable across different applications.',
    hero:{src:'/assets/duolife/04-product-ring.jpg',width:1920,height:1920,alt:'DuoLife packaging arranged in a colourful circular composition',caption:'DuoLife — a consistent brand world across product communication.'},
    sections:[
      {id:'identity',heading:'Begin with the identity that already exists.',paragraphs:[
        'The starting point is the brand: its logo, typography, colours, imagery and tone of communication. We look at the relationships between those elements and ask what should carry into animation. The aim is to extend what makes the brand recognisable, rather than adding movement with no connection to its visual language.',
        'This can lead to quite different outcomes. A precise identity might call for measured timing and controlled camera movement. A more energetic brief might invite rapid transitions or a stronger sense of momentum. We discuss the intended character before choosing how the graphics should move.'
      ]},
      {id:'principles',heading:'Turn visual characteristics into motion principles.',paragraphs:[
        'Motion introduces another set of design decisions: duration, acceleration, direction, sequence and the relationship between elements. We explore these through short tests. A logo reveal can become a useful starting point, but the wider question is how the same character could inform transitions, typography and product imagery.',
        'We look for a small set of behaviours that work together. These might include the way shapes assemble, how a camera approaches an object or how colour appears across a sequence. The principles should be specific enough to recognise and flexible enough to support more than one animation.'
      ]},
      {id:'context',heading:'Connect the brand to the subject.',paragraphs:[
        'The context of the communication matters as much as the identity itself. For a sports broadcast, movement can reflect the pace and direction of the sport. For product communication, materials, packaging and composition may be the strongest connection to the brand. We develop the motion around that relationship.',
        'In the CANAL+ speedway project, a familiar channel identity is connected to track-inspired forms and a fast-moving 3D space. In the DuoLife work, the relationship grows across packaging, product imagery and campaign animation. These are different applications of the same question: what makes the result feel like it belongs to this brand?'
      ],figure:{src:'/assets/canal-plus/07-logo-detail.jpg',width:1920,height:1080,alt:'Close-up of the three-dimensional CANAL+ broadcast graphic',caption:'CANAL+ — translating an existing identity into a sports broadcast environment.'}},
      {id:'applications',heading:'Build consistency across the actual touchpoints.',paragraphs:[
        'A motion identity needs to work where the brand communicates. That could include a website, product launch film, social post, presentation or event screen. We discuss those placements early so that compositions, durations and graphic information fit the intended use.',
        'Consistency does not require identical animation everywhere. A longer introduction has a different task from a quick scene transition. What connects them is a shared visual behaviour: recognisable timing, a related use of space and a consistent treatment of the brand assets. Keeping those relationships clear makes the individual pieces feel like part of one family.'
      ]}
    ],
    examples:[
      {slug:'canal-plus',name:'CANAL+',text:'A logo-led intro and scene transitions that translate a channel identity into the visual world of speedway.',image:'/assets/canal-plus/01-speedway-hero.jpg',width:2020,height:865},
      {slug:'duolife',name:'DuoLife',text:'Product design, CGI imagery and motion developed within a long-running brand collaboration.',image:'/assets/duolife/06-maca-campaign.jpg',width:2560,height:1440}
    ],
    closing:'To discuss brand identity in motion, share your current identity guidelines, existing assets and the situations where animation will be used. We can then explore how the brand should behave, which applications are needed and how to keep them connected.'
  }
];
