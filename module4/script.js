var names = new Array();
names[0]="Denzel";
names[1]="Jason";
names[2]="Joseph";
names[3]="Paul";
names[4]="Tim";
names[5]="Steve";
names[6]="Jacob";
names[7]="Mark";
names[8]="Lebron";
names[9]="Henry";

for(var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}

