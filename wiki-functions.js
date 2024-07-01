
window.onload = (event) => {
    document.getElementById('patchnotes').value = "" ;
    document.getElementById('formattedpatchnotes').value = "" ;
    ClearFields() ;
  };

var patchvolume = 0

function ClearFields() {
    document.getElementById("sdicon").value = "";
    document.getElementById("skdsk").value = "";
    document.getElementById("lvlreq").value = "";
    document.getElementById("prereq").value = "";
    document.getElementById('skilldesccode').value = "";
}

function MakeSkillDesc() {
    var formicon = document.getElementById("sdicon").value;
    var formskdsk = document.getElementById("skdsk").value;
    var formlvlreq = document.getElementById("lvlreq").value;
    var formprereqs =document.getElementById("prereq").value;
    var skilldesccode = "{{Skilldesc" + "|" + formicon + "|" + formskdsk  + "|" + formlvlreq + "|" + formprereqs + "}}";
    document.getElementById('skilldesccode').value = skilldesccode;
}

function PickAPatch(){
    var patchno = document.getElementById("patch-names").value;
    patchlink = ""
    document.getElementById('patch').value = patchno;
}

function GetPatch(){
    var e = document.getElementById("patch-names");
    var value = e.value;
    text = e.options[e.selectedIndex].text;
    GetPatchUrl(this)
}

function GetPatchUrl(){
    switch (text){
        case '#1 Bedrock':
        patchurl = "[[Patch_Notes#Patch_.231:_Bedrock|#1 Bedrock]]";
        break;
        case '#2 Quartz':
        patchurl = "[[Patch_Notes#Patch_.232:_Quartz|#2 Quartz]]";
        break;
        case '#3 Granite':
        patchurl = "[[Patch_Notes#Patch_.233:_Granite|#3 Granite]]";
        break;
        case '#4 Onyx':
        patchurl = "[[Patch_Notes#Patch_.234:_Onyx|#4 Onyx]]";
        break;
        case '#5 Limestone':
        patchurl = "[[Patch_Notes#Patch_.235:_Limestone|#5 Limestone]]";
        break;
        case '#6 Obsidian':
        patchurl = "[[Patch_Notes#Patch_.236:_Obsidian|#6 Obsidian]]";
        break;
        case '#7 Beryl':
        patchurl = "[[Patch_Notes#Patch_.237:_Beryl|#7 Beryl]]";
        break;
        case '#8 Pyrite':
        patchurl = "[[Patch_Notes#Patch_.238:_Pyrite|#8 Pyrite]]";
        break;
        case '#9 Aventurine':
        patchurl = "[[Patch_Notes#Patch_.239:_Aventurine|#9 Aventurine]]";
        break;
        case '#10 Tanzanite':
        patchurl = "[[Patch_Notes#Patch_.2310:_Tanzanite|#10 Tanzanite]]";
        break;
        case '#11 Kyanite':
        patchurl = "[[Patch_Notes#Patch_.2311:_Kyanite|#11 Kyanite]]";
        break;
        case '#12 Edenite':
        patchurl = "[[Patch_Notes#Patch_.2312:_Edenite|#12 Edenite]]";
        break;
        case '#13 Titanium':
        patchurl = "[[Patch_Notes#Patch_.2313:_Titanium|#13 Titanium]]";
        break;
        case '#14 Serandite':
        patchurl = "[[Patch_Notes#Patch_.2314:_Serandite|#14 Serandite]]";
        break;
        case '#15 Graphite':
        patchurl = "[[Patch_Notes#Patch_.2315:_Graphite|#15 Graphite]]";
        break;
        case '#16 Jade':
        patchurl = "[[Patch_Notes#Patch_.2316:_Jade|#16 Jade]]";
        break;
        case '#17 Tourmaline':
        patchurl = "[[Patch_Notes#Patch_.2317:_Tourmaline|#17 Tourmaline]]";
        break;
        case '#18 Flint':
        patchurl = "[[Patch_Notes#Patch_.2318:_Flint|#18 Flint]]";
        break;
        case '#19 Zincite':
        patchurl = "[[Patch_Notes#Patch_.2319:_Zincite|#19 Zincite]]";
        break;
        case '#20 Perlite':
        patchurl = "[[Patch_Notes#Patch_.2320:_Perlite|#20 Perlite]]";
        break;
        case '#21 Shungite':
        patchurl = "[[Patch_Notes#Patch_.2321:_Shungite|#21 Shungite]]";
        break;
    } 
    document.getElementById('picked-patch').value = patchurl;
}

function patchcode1() {
    patchurl = document.getElementById('picked-patch').value ;
    var oldnotes = document.getElementById('patchnotes').value ;
    var addasterisk = oldnotes.replace(/^(?!>)/gm, '* ') ;   
    var newnotes1 = '{| class="wikitable" \n! Version Name !!Patch Notes \n|- \n' + '|' + patchurl + '|| \n' + addasterisk + '\n|}' ;
//    document.getElementById('formattedpatchnotes').value = oldnotes + patchurl ;
    document.getElementById('formattedpatchnotes').value = newnotes1 ;
    document.getElementById('patchnotes').value = ""
    patchvolume = 1
}

function patchcode2() {
    spacer = '|- \n' + '| Older Versions\n' + '|\n' + '{| class="mw-collapsible mw-collapsed" cellspacing="0" \n' + '!\n' + '!\n' + '|-\n' + '|style="border-bottom: 1px solid #a2a9b1;"|'
    spacer2 = '|style="border-bottom: 1px solid #a2a9b1;"|'
    spacer3 = '||style="border-bottom: 1px solid #a2a9b1;"| \n'

    if (patchvolume == 1) {
        patchurl = document.getElementById('picked-patch').value ;
        var oldnotes = document.getElementById('patchnotes').value ;
        var addasterisk = oldnotes.replace(/^(?!>)/gm, '* ') ;   
//        alert (addasterisk)
        newnotes1 = document.getElementById('formattedpatchnotes').value ;
//        newno = newnotes1.lastIndexof("|}") ; 
//        newnotes1 = newnotes1.substring(0,newno) + '\n' + newnotes1.substring(newno+1)
//          newnotes1 = newnotes1.replace((/\|\}([^_]*)$/, '\|\-')) ;
        newnotes2 = newnotes1.replace(/\|\}\s*$/, '');
//        newnotes3 = newnotes2 + spacer + '|' + patchurl + '|| \n' + addasterisk + '\n|}' ; 
        newnotes3 = newnotes2 + spacer + patchurl +  spacer3 + '\n' + addasterisk + '\n|}\n|}'  ; 
        document.getElementById('formattedpatchnotes').value = newnotes3 ;
            document.getElementById('patchnotes').value = "" ;
            patchvolume = 2
    }
    if (patchvolume == 2) {
        patchurl2 = document.getElementById('picked-patch').value ;
        var oldnotes2 = document.getElementById('patchnotes').value ;
        var addasterisk2 = oldnotes2.replace(/^(?!>)/gm, '* ') ;   
        newnotes4 = document.getElementById('formattedpatchnotes').value ;
        newnotes5 = newnotes4.replace(/\|\}\n\|\}\s*$/, '');
        newnotes6 = newnotes5 + '|-\n' + spacer2 + patchurl2 + spacer3 + addasterisk2 + '\n|}\n|}\n' ; 
        document.getElementById('formattedpatchnotes').value = newnotes6 ;
        document.getElementById('patchnotes').value = "" ;
        patchvolume = 2
    }
    if (patchvolume == 3) {
        patchurl2 = document.getElementById('picked-patch').value ;
        var oldnotes2 = document.getElementById('patchnotes').value ;
        var addasterisk2 = oldnotes2.replace(/^(?!>)/gm, '* ') ;   
        newnotes1 = document.getElementById('formattedpatchnotes').value ;
        newnotes2 = newnotes1.replace(/\|\}\s*$/, '');
        newnotes3 = newnotes2 + '|' + patchurl2 + '|| \n' + addasterisk2 + '\n|}\n' + patchvolume ; 
        document.getElementById('formattedpatchnotes').value = newnotes3 ;
        document.getElementById('patchnotes').value = "" ;
        patchvolume = 3
    }

}

