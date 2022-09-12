var navbarVar = document.getElementById("navbarId"),
    aboutVar = document.getElementById("about") ,
    menuVar = document.getElementById("menuId") ,
    expertVar = document.getElementById("expertsId") ,
    peopleSayVar = document.getElementById("peopleSayId") ,
    labelVar = document.getElementById("labelId");

/* ************************************* When moving the scroll horizontally [ scrollY] ************************************* */
window.onscroll=function()
{
    /* --------------------------------------- navbar section --------------------------------------- */
    console.log("The value of scrollY = " , scrollY);
    if( window.scrollY >= 120 )
    {
        navbarVar.style.backgroundColor="#000";
        navbarVar.style.padding = 0 ;   
        /* logo تبعد مسافة 20 بيكسل عن القمة عشان تكون في نفس مستوي ال menubarIcon هخلي ال */
        labelVar.style.top="20px";
    }
    /* navbar لما المسافة الراسية اللي  البكرةاتحركتها لاسفل اقل من 580 بيكسل مش هحط خلفية  لل */
    else
    {
        navbarVar.style.backgroundColor="transparent";
        /*  الاصلي padding في مكانه الاصلي و واخد نفس ال navbar عشان لما ارجع بالبكرة راسيا لاعلي يكون ال  */
        navbarVar.style.padding ="30px 25px" ;
    }
    /* --------------------------------------- about section --------------------------------------- */
    /* navbar لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 580 بيكسل هحط خلفية سوداء لل */
    if( window.scrollY >= 347 )
    {
    /* smooth بشكل about section بحيث لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 120 بيكسل هيظهر about sectionهخفي ال */
        aboutVar.style.opacity=1;
    }
    /* navbar لما المسافة الراسية اللي  البكرةاتحركتها لاسفل اقل من 580 بيكسل مش هحط خلفية  لل */
    else
    {
       /* smooth بشكل about section بحيث لما احرك البكرة راسيا لاعلي مسافة اصغر من 310 بيكسل هيخفي about sectionهخفي ال */
        aboutVar.style.opacity=0;   
    }
    /* --------------------------------------- menu section --------------------------------------- */
    /* menu لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 600 بيكسل هحط خلفية سوداء لل */
    if( window.scrollY >= 600 )
    {
    /* smooth بشكل menu section بحيث لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 600 بيكسل هيظهر menu sectionهخفي ال */
        menuVar.style.opacity=1;
    }
    else
    {
       /* smooth بشكل menu section بحيث لما احرك البكرة راسيا لاعلي مسافة اصغر من 600 بيكسل هيخفي menu sectionهخفي ال */
       menuVar.style.opacity=0;   
    }
    /* --------------------------------------- expert section --------------------------------------- */
    /* expert لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 1700 بيكسل هحط خلفية سوداء لل */
    if( window.scrollY >= 1700 )
    {
         /* smooth بشكل experts section بحيث لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 1700 بيكسل هيظهر experts sectionهخفي ال */
         expertVar.style.opacity=1;
    }
    else
    {
       /* smooth بشكل experts section بحيث لما احرك البكرة راسيا لاعلي مسافة اصغر من 1970 بيكسل هيخفي experts sectionهخفي ال */
       expertVar.style.opacity=0;   
    }
/* --------------------------------------- people say section --------------------------------------- */
    /* people Say لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 2350 بيكسل هحط خلفية سوداء لل */
    if( window.scrollY >= 2350 )
    {
         /* smooth بشكل people Say section بحيث لما احرك البكرة راسيا لاسفل مسافة اكبر من او تساوي 2350 بيكسل هيظهر people Say sectionهخفي ال */
         peopleSayVar.style.opacity=1;
    }
    else
    {
       /* smooth بشكل  people Say section بحيث لما احرك البكرة راسيا لاعلي مسافة اصغر من 2350 بيكسل هيخفي people Say sectionهخفي ال */
       peopleSayVar.style.opacity=0;   
    }

   
}
