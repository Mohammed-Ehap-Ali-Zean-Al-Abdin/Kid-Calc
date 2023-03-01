// Sections variables
let signInSection = document.querySelector(".singIn");
let logInSection = document.querySelector(".logIn");
let infoBarSection = document.querySelector(".infoBar");
let calcSection = document.querySelector(".calc");
let updateSection = document.querySelector(".updateDataForm");
let themesSection = document.querySelector(".themesSection");
let addThemeSection = document.querySelector(".addThemeSection");
let UpdateThemeSection = document.querySelector(".UpdateThemeSection");
let addAndUpdateSection = document.querySelector(".addAndUpdateSection");
let demoSection = document.querySelector(".demoSection");
let logo = document.querySelector(".logo");
let toLoginSection = document.querySelector("#toLoginSection");
let toSingInSection = document.querySelector("#toSingInSection");
//Sing in variables
let singUserName = document.querySelector("#singUserName");
let signEmail = document.querySelector("#signEmail");
let signAge = document.querySelector("#signAge");
let singPassword = document.querySelector("#singPassword");
let singPasswordAgain = document.querySelector("#singPasswordAgain");
let singPasswordImg = document.querySelector("#singPasswordImg");
let singPasswordImgSlash = document.querySelector("#singPasswordImgSlash");
let singPasswordAgainImg = document.querySelector("#singPasswordAgainImg");
let singPasswordAgainImgSlash = document.querySelector("#singPasswordAgainImgSlash");
let selectedTheme = document.querySelector("#selectedTheme");
let emailUsed = document.querySelector("#emailUsed");
let singInBtn = document.querySelector("#singInBtn");
// login variables
let loginEmail = document.querySelector("#loginEmail");
let loginPassword = document.querySelector("#loginPassword");
let loginPasswordImg = document.querySelector("#loginPasswordImg");
let loginPasswordImgSlash = document.querySelector("#loginPasswordImgSlash");
let unknownEmail = document.querySelector("#unknownEmail");
let logInBtn = document.querySelector("#logInBtn");
// Handler variables
let userNameOutput = document.querySelectorAll(".userNameOutput")
let ageOutput = document.querySelector(".ageOutput");
let correctAnswersOutput = document.querySelector(".correctAnswersOutput");
let wrongAnswersOutput = document.querySelector(".wrongAnswersOutput");
let hopeOrGreat = document.querySelector(".hopeOrGreat");
let img = document.querySelectorAll(".logImg1");
// test 
localStorage.setItem("toSingIn","true");
//calc variables
let cPlus = document.querySelector("#cPlus");
let cMinus = document.querySelector("#cMinus");
let cLesserThan = document.querySelector("#cLesserThan");
let cGreaterThan = document.querySelector("#cGreaterThan");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
let cs = document.querySelector("#cs");
let c4 = document.querySelector("#c4");
let c5 = document.querySelector("#c5");
let c6 = document.querySelector("#c6");
let cObelus = document.querySelector("#cObelus");
let c7 = document.querySelector("#c7");
let c8 = document.querySelector("#c8");
let c9 = document.querySelector("#c9");
let cTimes = document.querySelector("#cTimes");
let cAC = document.querySelector("#cAC");
let c0 = document.querySelector("#c0");
let cDel = document.querySelector("#cDel");
let cE = document.querySelector("#cE");
let output = document.querySelector("#output");
let firstComponent = document.querySelector("#firstComponent");
let secondComponent = document.querySelector("#secondComponent");
let operation = document.querySelector("#operation");
let result = document.querySelector("#result");
let trueAnswerIcon = document.querySelector("#trueAnswerIcon");
let falseAnswerIcon = document.querySelector("#falseAnswerIcon");
let hent = document.querySelector("#hint");
let hintDescription = document.querySelector("#hintDescription");
let ex = document.querySelector("#ex");
let exDescription = document.querySelector("#exDescription");
let num = document.querySelectorAll(".num");
let op = document.querySelectorAll(".op");
// update data variables
let updateUserData = document.querySelector("#updateUserData");
let updateUserName = document.querySelector("#updateUserName");
let updateAge = document.querySelector("#updateAge");
let updateSelectedTheme = document.querySelector("#updateSelectedTheme");
let updatePassword = document.querySelector("#updatePassword");
let updatePasswordAgain = document.querySelector("#updatePasswordAgain");
let updatePasswordImg = document.querySelector("#updatePasswordImg");
let updatePasswordAgainImg = document.querySelector("#updatePasswordAgainImg");
let updatePasswordImgSlash = document.querySelector("#updatePasswordImgSlash");
let updatePasswordAgainImgSlash = document.querySelector("#updatePasswordAgainImgSlash");
let emptyField = document.querySelector("#emptyField");
let updateInBtn = document.querySelector("#updateInBtn");
// log out variable
let logout = document.querySelector("#logout");
let nav = document.querySelector("#nav");
// Themes Settings Variables
let themesTable = document.querySelector("#themesTable");
let themeSettings = document.querySelector("#themeSettings")
let imgDemo = document.querySelector("#imgDemo");
// Update Themes Variables
let updateMain = document.querySelector("#updateMain");
let updateSecond = document.querySelector("#updateSecond");
let updateThird = document.querySelector("#updateThird");
let updateAlert = document.querySelector("#updateAlert");
let updateSuccess = document.querySelector("#updateSuccess");
let updateThemeName = document.querySelector("#updateThemeName");
let updateImgURL = document.querySelector("#updateImgURL");
let emptyFieldUpdateTheme = document.querySelector("#emptyFieldUpdateTheme");
let updateThemeBtn = document.querySelector("#updateThemeBtn");
// Add Themes Variables
let Main = document.querySelector("#Main");
let Second = document.querySelector("#Second");
let Third = document.querySelector("#Third");
let Alert = document.querySelector("#Alert");
let Success = document.querySelector("#Success");
let ThemeName = document.querySelector("#ThemeName");
let ImgURL = document.querySelector("#ImgURL");
let emptyFieldAddTheme = document.querySelector("#emptyFieldAddTheme");
let addNewTheme = document.querySelector("#addNewTheme");
let addThemeBtn = document.querySelector("#addThemeBtn");
// Add Default Themes Variable
let addDefaultThemes = document.querySelector("#addDefaultThemes");
// Reset Variable
let reset = document.querySelector("#reset");
// Delete All Variable
let deleteAll = document.querySelector("#deleteAll");
// side bar Variables
let barIconDiv = document.querySelector("#barIconDiv");
let barIconDivClicked = document.querySelector("#barIconDivClicked");
let barSection = document.querySelector("#barSection");
let updateUserDataBar = document.querySelector("#updateUserDataBar");
let themeSettingsBar = document.querySelector("#themeSettingsBar");
let logoutBar = document.querySelector("#logoutBar");
// footer Variable
let footer = document.querySelectorAll("footer");
// code :)
// Header Settings
function HeaderSettings(){
    // side bar
    window.addEventListener("resize",()=>{
        if(document.defaultView.innerWidth<=630){
            barIconDiv.classList.remove("hidden");
            barSection.classList.add("hidden");
            barIconDiv.addEventListener("click",()=>{
                barIconDiv.classList.add("hidden");
                barSection.classList.remove("hidden");
                barIconDivClicked.classList.remove("hidden");
            });
            barIconDivClicked.addEventListener("click",()=>{
                barIconDiv.classList.remove("hidden");
                barSection.classList.add("hidden");
                barIconDivClicked.classList.add("hidden");
            });
        }else{
            barIconDiv.classList.add("hidden");
            barSection.classList.add("hidden");
            barIconDivClicked.classList.add("hidden");
        };
    });
    // back home
    logo.addEventListener("click",()=>{
        Check();
    });
    // Themes Settings
    function ThemesSettings(){
        themesSection.classList.remove("hidden");
        addAndUpdateSection.classList.add("hidden");
        infoBarSection.classList.add("hidden");
        calcSection.classList.add("hidden");
        updateSection.classList.add("hidden");
        emptyField.classList.add("hidden");
        let user = JSON.parse(localStorage.getItem("user"));
        let usersOb = JSON.parse(localStorage.getItem("users"));
        themesTable.innerHTML=`<tr><th>Theme Name</th><th colspan="3">Theme Properties</th></tr>`;
        user.userThemes.forEach((themeOb)=>{
            // set theme
            let setBtn = document.createElement("button");
            setBtn.innerHTML = " Set favourite";
            setBtn.addEventListener("click",()=>{
                Object.defineProperty(user,'userFavoriteTheme',{value : `${themeOb.Name}`});
                localStorage.setItem("user",JSON.stringify(user));
                usersOb.forEach((mail)=>{
                    if(mail.userEmail==user.userEmail){
                        Object.defineProperty(mail,'userFavoriteTheme',{value : `${themeOb.Name}`});
                    }; 
                });
                localStorage.setItem("users",JSON.stringify(usersOb));
                Check();
            });
            // remove theme
            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = "Remove";
            removeBtn.addEventListener("click",()=>{
                if(user.userThemes.length>1){
                    if(themeOb.Name==user.userFavoriteTheme){
                        let usersOb = JSON.parse(localStorage.getItem("users"));
                        let userOb = JSON.parse(localStorage.getItem("user"));
                        Object.defineProperty(userOb,'userFavoriteTheme',{value : `${user.userThemes[0].Name}`});
                        localStorage.setItem("user",JSON.stringify(userOb));
                        usersOb.forEach((mail)=>{
                            if(mail.userEmail==user.userEmail){
                                Object.defineProperty(mail,'userFavoriteTheme',{value : `${user.userThemes[0].Name}`});
                            }; 
                        });
                        localStorage.setItem("users",JSON.stringify(usersOb));
                        Check();
                    };
                    let themesListAfterRemoveItem = user.userThemes.filter((themeToRemove)=>{
                        if(themeToRemove.Name!=themeOb.Name){
                            return themeToRemove;
                        };
                    });
                    Object.defineProperty(user,'userThemes',{value : themesListAfterRemoveItem});
                    localStorage.setItem("user",JSON.stringify(user));
                    usersOb.forEach((mail)=>{
                        if(mail.userEmail==user.userEmail){
                            Object.defineProperty(mail,'userThemes',{value : themesListAfterRemoveItem});
                        }; 
                    });
                    localStorage.setItem("users",JSON.stringify(usersOb));
                    Check();
                };
            });
            // update theme
            let updateBtn = document.createElement("button");
            updateBtn.innerHTML = "Update";
            updateBtn.addEventListener("click",()=>{
                themesSection.classList.add("hidden");
                UpdateThemeSection.classList.remove("hidden");
                demoSection.classList.remove("hidden");
                addAndUpdateSection.classList.remove("hidden");
                emptyFieldUpdateTheme.classList.add("hidden");
                updateMain.value = themeOb.MainColor;
                updateSecond.value = themeOb.SecondColor;
                updateThird.value = themeOb.ThirdColor;
                updateAlert.value = themeOb.AlertColor;
                updateSuccess.value = themeOb.SuccessColor;
                updateThemeName.value = themeOb.Name;
                updateImgURL.value = themeOb.Image;
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-main-color",`${themeOb.MainColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-second-color",`${themeOb.SecondColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-th3-color",`${themeOb.ThirdColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-alert-color",`${themeOb.AlertColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-success-color",`${themeOb.SuccessColor}`);
                imgDemo.setAttribute("src",updateImgURL.value);
                updateMain.addEventListener("change",()=>{
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-main-color",`${updateMain.value}`);
                });
                updateSecond.addEventListener("change",()=>{
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-second-color",`${updateSecond.value}`);
                });
                updateThird.addEventListener("change",()=>{
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-th3-color",`${updateThird.value}`);
                });
                updateAlert.addEventListener("change",()=>{
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-alert-color",`${updateAlert.value}`);
                });
                updateSuccess.addEventListener("change",()=>{
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-success-color",`${updateSuccess.value}`);
                });
                let differentName;
                updateThemeName.addEventListener("change",()=>{
                    let themesListAfterRemoveItem = user.userThemes.filter((themeToRemove)=>{
                        if(themeToRemove.Name!=themeOb.Name){
                            return themeToRemove;
                        };
                    });
                    if(themesListAfterRemoveItem.every((TN)=>{return TN.Name!=updateThemeName.value})){
                        emptyFieldUpdateTheme.classList.add("hidden");
                        differentName = true;
                    }else{
                        emptyFieldUpdateTheme.textContent = "theme name used";
                        emptyFieldUpdateTheme.classList.remove("hidden");
                        differentName = false;
                    };
                });
                let themesListAfterRemoveItem = user.userThemes.filter((themeToRemove)=>{
                    if(themeToRemove.Name!=themeOb.Name){
                        console.log(themeToRemove);
                        return themeToRemove;
                    };
                });
                if(themesListAfterRemoveItem.every((TN)=>{return TN.Name!=updateThemeName.value})){
                    emptyFieldUpdateTheme.classList.add("hidden");
                    differentName = true;
                }else{
                    emptyFieldUpdateTheme.textContent = "theme name used";
                    emptyFieldUpdateTheme.classList.remove("hidden");
                    differentName = false;
                };
                updateImgURL.addEventListener("change",()=>{
                    imgDemo.setAttribute("src",updateImgURL.value.trim());
                });
                updateThemeBtn.addEventListener("click",()=>{
                    if(differentName&&updateThemeName.value!=""&&updateImgURL!=""){
                        Object.defineProperty(themeOb,'Name',{value :updateThemeName.value.trim()});
                        Object.defineProperty(themeOb,'MainColor',{value :updateMain.value});
                        Object.defineProperty(themeOb,'SecondColor',{value :updateSecond.value});
                        Object.defineProperty(themeOb,'ThirdColor',{value :updateThird.value});
                        Object.defineProperty(themeOb,'AlertColor',{value :updateAlert.value});
                        Object.defineProperty(themeOb,'SuccessColor',{value :updateSuccess.value});
                        Object.defineProperty(themeOb,'Image',{value :updateImgURL.value.trim()});
                        Object.defineProperty(user,'userThemes',{value :user.userThemes});
                        localStorage.setItem("user",JSON.stringify(user));
                        usersOb.forEach((mail)=>{
                            if(mail.userEmail==user.userEmail){
                                Object.defineProperty(mail,'userThemes',{value : user.userThemes});
                            }; 
                        });
                        localStorage.setItem("users",JSON.stringify(usersOb));
                        Check();
                    }else{
                        emptyFieldUpdateTheme.textContent = "theme name used you can't update";
                        emptyFieldUpdateTheme.classList.remove("hidden");
                    };
                });
            });
            let newRow = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdSet = document.createElement("td");
            let tdUpdate = document.createElement("td");
            let tdRemove = document.createElement("td");
            tdName.innerHTML=`${themeOb.Name}`;
            newRow.appendChild(tdName);
            tdSet.appendChild(setBtn);
            newRow.appendChild(tdSet);
            tdUpdate.appendChild(updateBtn);
            newRow.appendChild(tdUpdate);
            tdRemove.appendChild(removeBtn);
            newRow.appendChild(tdRemove);
            themesTable.appendChild(newRow);
        });
        // add theme
        addNewTheme.addEventListener("click",()=>{
            themesSection.classList.add("hidden");
            addThemeSection.classList.remove("hidden");
            demoSection.classList.remove("hidden");
            addAndUpdateSection.classList.remove("hidden");
            emptyFieldAddTheme.classList.add("hidden");
            if(user.userThemes.length==0){
                Main.value = "#bd8f4d";
                Second.value = "#000000";
                Third.value = "#ffffff";
                Alert.value = "#ff0000";
                Success.value = "#0ee432";
                ThemeName.value = "Pharaohs";
                ImgURL.value = "/assets/images/pharaoh.png";     
            }else{
                let themeHere = 0;
                let themeNotHere = 0;
                user.userThemes.forEach((themeOb)=>{  
                    if(themeOb.Name==user.userFavoriteTheme){
                        Main.value = themeOb.MainColor;
                        Second.value = themeOb.SecondColor;
                        Third.value = themeOb.ThirdColor;
                        Alert.value = themeOb.AlertColor;
                        Success.value = themeOb.SuccessColor;
                        ThemeName.value = themeOb.Name;
                        ImgURL.value = themeOb.Image;
                        ++themeHere;
                    }else{
                        ++themeNotHere;
                    };
                });
                if(themeHere==0&&themeNotHere==user.userThemes.length){
                    Main.value = "#bd8f4d";
                    Second.value = "#000000";
                    Third.value = "#ffffff";
                    Alert.value = "#ff0000";
                    Success.value = "#0ee432";
                    ThemeName.value = "Pharaohs";
                    ImgURL.value = "/assets/images/pharaoh.png";
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-main-color",`${Main.value}`);
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-second-color",`${Second.value}`);
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-th3-color",`${Third.value}`);
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-alert-color",`${Alert.value}`);
                    document.styleSheets[0].cssRules[1].style.setProperty("--demo-success-color",`${Success.value}`);
                };
            };
            Main.addEventListener("change",()=>{
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-main-color",`${Main.value}`);
            });
            Second.addEventListener("change",()=>{
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-second-color",`${Second.value}`);
            });
            Third.addEventListener("change",()=>{
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-th3-color",`${Third.value}`);
            });
            Alert.addEventListener("change",()=>{
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-alert-color",`${Alert.value}`);
            });
            Success.addEventListener("change",()=>{
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-success-color",`${Success.value}`);
            });
            let differentName;
            ThemeName.addEventListener("change",()=>{
                if(user.userThemes.every((TN)=>{return TN.Name!=ThemeName.value})){
                    emptyFieldAddTheme.classList.add("hidden");
                    differentName = true;
                }else{
                    emptyFieldAddTheme.textContent = "theme name used";
                    emptyFieldAddTheme.classList.remove("hidden");
                    differentName = false;
                };
            });
            ImgURL.addEventListener("change",()=>{
                imgDemo.setAttribute("src",ImgURL.value);
            });
            addThemeBtn.addEventListener("click",()=>{
                if(differentName&&ThemeName.value!=""){
                    if(ImgURL!=" "){
                        let newThemeOb = {
                            Name: ThemeName.value.trim(),
                            MainColor: Main.value,
                            SecondColor: Second.value,
                            ThirdColor: Third.value,
                            AlertColor: Alert.value,
                            SuccessColor: Success.value,
                            Image: ImgURL.value.trim()
                        }; 
                        if(user.userThemes.length==0){
                            Object.defineProperty(user,'userThemes',{value : [newThemeOb]});
                        }else if(user.userThemes.length>0){
                            user.userThemes.push(newThemeOb);
                            Object.defineProperty(user,'userThemes',{value : user.userThemes});
                        };
                        localStorage.setItem("user",JSON.stringify(user));
                        usersOb.forEach((mail)=>{
                            if(mail.userEmail==user.userEmail){
                                Object.defineProperty(mail,'userThemes',{value : user.userThemes});
                            }; 
                        });
                        localStorage.setItem("users",JSON.stringify(usersOb));
                        Check();
                    };
                }else{
                    emptyFieldAddTheme.textContent = "theme name used";
                    emptyFieldAddTheme.classList.remove("hidden");
                };
            });
        });
        // Add Default Themes
        addDefaultThemes.addEventListener("click",()=>{
            let defaultThemes = [
                {Name:"Pharaohs",MainColor:"#bd8f4d",SecondColor:"#000000",ThirdColor:"#ffffff",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/pharaoh.png"},
                {Name:"Technology",MainColor:"#89d6fb",SecondColor:"#00303f",ThirdColor:"#d4f0fc",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/technology.png"},
                {Name:"Space",MainColor:"#05377b",SecondColor:"#010b19",ThirdColor:"#89d6fb",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/space.png"},
            ];
            defaultThemes.forEach((theme)=>{
                let themeHere = 0;
                let themeNotHere = 0;
                user.userThemes.forEach((userTheme)=>{
                    if(userTheme.Name==theme.Name){
                        ++themeHere;
                    }else{
                        ++themeNotHere;
                    };
                });
                if(themeNotHere==user.userThemes.length&&themeHere==0){
                    user.userThemes.push(theme);
                    localStorage.setItem("user",JSON.stringify(user));
                    usersOb.forEach((mail)=>{
                        if(mail.userEmail==user.userEmail){
                            Object.defineProperty(mail,'userThemes',{value : user.userThemes});
                        }; 
                    });
                    localStorage.setItem("users",JSON.stringify(usersOb));
                    Check();
                };
            });
        });
        // Reset
        reset.addEventListener("click",()=>{
            let defaultThemes = [
                {Name:"Pharaohs",MainColor:"#bd8f4d",SecondColor:"#000000",ThirdColor:"#ffffff",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/pharaoh.png"},
                {Name:"Technology",MainColor:"#89d6fb",SecondColor:"#00303f",ThirdColor:"#d4f0fc",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/technology.png"},
                {Name:"Space",MainColor:"#05377b",SecondColor:"#010b19",ThirdColor:"#89d6fb",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/space.png"},
            ];
            Object.defineProperty(user,'userThemes',{value : defaultThemes});
            localStorage.setItem("user",JSON.stringify(user));
            usersOb.forEach((mail)=>{
                if(mail.userEmail==user.userEmail){
                    Object.defineProperty(mail,'userThemes',{value : user.userThemes});
                }; 
            });
            localStorage.setItem("users",JSON.stringify(usersOb));
            Check();
        });
        // Delete All Themes
        deleteAll.addEventListener("click",()=>{
            defaultThemeArray = [{Name:"Pharaohs",MainColor:"#bd8f4d",SecondColor:"#000000",ThirdColor:"#ffffff",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/pharaoh.png"}];
            Object.defineProperty(user,'userThemes',{value : defaultThemeArray});
            Object.defineProperty(user,'userFavoriteTheme',{value : "Pharaohs"});
            localStorage.setItem("user",JSON.stringify(user));
            usersOb.forEach((mail)=>{
                if(mail.userEmail==user.userEmail){
                    Object.defineProperty(mail,'userThemes',{value : user.userThemes});
                }; 
            });
            localStorage.setItem("users",JSON.stringify(usersOb));
            Check();
        });
    };
    themeSettings.addEventListener("click",()=>{
        ThemesSettings();
    });
    themeSettingsBar.addEventListener("click",()=>{
        ThemesSettings();
        barIconDiv.classList.remove("hidden");
        barSection.classList.add("hidden");
        barIconDivClicked.classList.add("hidden");
    });
    // log out
    function LogOut(){
        updateSelectedTheme.innerHTML="";
        themesTable.innerHTML = "";
        localStorage.removeItem("user");
        localStorage.setItem("login","false");
        localStorage.setItem("userCorrectAnswers",0);
        localStorage.setItem("userWrongAnswers",0);
        firstComponent.textContent = "";
        secondComponent.textContent = "";
        operation.textContent = "";
        trueAnswerIcon.classList.add("hidden");
        falseAnswerIcon.classList.add("hidden");
        result.textContent = "";
        Check();
    }
    logout.addEventListener("click",()=>{
        LogOut();
    });
    logoutBar.addEventListener("click",()=>{
        LogOut();
        barIconDiv.classList.remove("hidden");
        barSection.classList.add("hidden");
        barIconDivClicked.classList.add("hidden");
    });
    // Update Data
    function UpdateUserData(){
        updatePasswordImg.addEventListener("click",function(){
            updatePassword.setAttribute("type","text");
            updatePasswordImg.classList.add("hidden");
            updatePasswordImgSlash.classList.remove("hidden");
        });
        updatePasswordImgSlash.addEventListener("click",function(){
            updatePassword.setAttribute("type","password");
            updatePasswordImgSlash.classList.add("hidden");
            updatePasswordImg.classList.remove("hidden");
        });
        updatePasswordAgainImg.addEventListener("click",function(){
            updatePassword.setAttribute("type","text");
            updatePasswordAgainImg.classList.add("hidden");
            updatePasswordAgainImgSlash.classList.remove("hidden");
        });
        updatePasswordAgainImgSlash.addEventListener("click",function(){
            updatePassword.setAttribute("type","password");
            updatePasswordAgainImgSlash.classList.add("hidden");
            updatePasswordAgainImg.classList.remove("hidden");
        });
        updateSection.classList.remove("hidden");
        addAndUpdateSection.classList.add("hidden");
        themesSection.classList.add("hidden");
        infoBarSection.classList.add("hidden");
        calcSection.classList.add("hidden");
        emptyField.classList.add("hidden");
        let user = JSON.parse(localStorage.getItem("user"));
        updateSelectedTheme.innerHTML="";
        user.userThemes.forEach((theme)=>{
            updateSelectedTheme.innerHTML = `${updateSelectedTheme.innerHTML}<option value="${theme.Name}">${theme.Name}</option>`
        });
        updatePassword.value = user.userPassword.trim();
        updatePasswordAgain.value = user.userPassword.trim();
        updateSelectedTheme.value = user.userFavoriteTheme;
        updateUserName.value = user.userName.trim();
        updateAge.value = user.userAge.trim();
        updateInBtn.addEventListener("click",()=>{
            let uN = updateUserName.value.trim();
            let uA = updateAge.value.trim();
            let uST = updateSelectedTheme.value.trim();
            let uP = updatePassword.value.trim();
            let user = JSON.parse(localStorage.getItem("user"));
            let usersOb = JSON.parse(localStorage.getItem("users"));
            if(updatePassword.value==updatePasswordAgain.value){
                if(updateSelectedTheme.value!=" "&& updateAge.value!=" " && updatePassword.value!=" " && updateUserName.value!=" "){
                    user = JSON.parse(localStorage.getItem("user"));
                    Object.defineProperty(user,'userName',{value : `${uN}`});
                    Object.defineProperty(user,'userAge',{value : `${uA}`});
                    Object.defineProperty(user,'userFavoriteTheme',{value : `${uST}`});
                    Object.defineProperty(user,'userPassword',{value : `${uP}`});
                    localStorage.setItem("user",JSON.stringify(user));
                    usersOb.forEach((mail)=>{
                        if(mail.userEmail==user.userEmail){
                            Object.defineProperty(mail,'userName',{value : `${uN}`});
                            Object.defineProperty(mail,'userAge',{value : `${uA}`});
                            Object.defineProperty(mail,'userFavoriteTheme',{value : `${uST}`});
                            Object.defineProperty(mail,'userPassword',{value : `${uP}`});
                        }; 
                    });
                    localStorage.setItem("users",JSON.stringify(usersOb));
                    updateSection.classList.add("hidden");
                    dataHandler(user);
                }else{
                    emptyField.classList.remove("hidden");
                    emptyField.textContent="You should to complete all fields";
                };
            }else{
                emptyField.classList.remove("hidden");
                emptyField.textContent="Password Equation Error";
            };
        });
    }
    updateUserData.addEventListener("click",()=>{
        UpdateUserData();
    });
    updateUserDataBar.addEventListener("click",()=>{
        UpdateUserData();
        barIconDiv.classList.remove("hidden");
        barSection.classList.add("hidden");
        barIconDivClicked.classList.add("hidden");
    });
};
// Calc
function Calc(){
    c0.addEventListener("click",()=>{
        output.textContent = output.textContent+0;
    });
    c1.addEventListener("click",()=>{
        output.textContent = output.textContent+1;
    });
    c2.addEventListener("click",()=>{
        output.textContent = output.textContent+2;
    });
    c3.addEventListener("click",()=>{
        output.textContent = output.textContent+3;
    });
    c4.addEventListener("click",()=>{
        output.textContent = output.textContent+4;
    });
    c5.addEventListener("click",()=>{
        output.textContent = output.textContent+5;
    });
    c6.addEventListener("click",()=>{
        output.textContent = output.textContent+6;
    });
    c7.addEventListener("click",()=>{
        output.textContent = output.textContent+7;
    });
    c8.addEventListener("click",()=>{
        output.textContent = output.textContent+8;
    });
    c9.addEventListener("click",()=>{
        output.textContent = output.textContent+9;
    });
    cPlus.addEventListener("click",()=>{
        output.textContent = "+";
    });
    cMinus.addEventListener("click",()=>{
        output.textContent = "-";
    });
    cObelus.addEventListener("click",()=>{
        output.textContent = `÷`;
    });
    cTimes.addEventListener("click",()=>{
        output.textContent = `x`;
    });
    cLesserThan.addEventListener("click",()=>{
        output.textContent = `<`;
    });
    cGreaterThan.addEventListener("click",()=>{
        output.textContent = `>`;
    });
    cAC.addEventListener("click",()=>{
        output.textContent = "";
    });
    cDel.addEventListener("click",()=>{
        output.textContent = output.value.slice(0, -1);
    });
    cE.addEventListener("click",()=>{
        output.textContent = "=";
    }); 
    hint.addEventListener("click",()=>{
        localStorage.setItem("hint","true");
        hintDescription.classList.remove("hidden");
    });
    if(localStorage.getItem("hint")=="false"){
        hintDescription.classList.add("hidden");
    };
    if(localStorage.getItem("hint")!=""){
    
    }else{
        localStorage.setItem("hint","false");
    };
    ex.addEventListener("click",()=>{
        localStorage.setItem("ex","true");
        exDescription.classList.remove("hidden");
    });
    if(localStorage.getItem("ex")=="false"){
        exDescription.classList.add("hidden");
    };
    if(localStorage.getItem("ex")!=""){
    
    }else{
        localStorage.setItem("ex","false");
    };
    localStorage.setItem("firstComponent", " ");
    localStorage.setItem("secondComponent", " ");
    localStorage.setItem("operation", " ");
    localStorage.setItem("userResult", " ");
    localStorage.setItem("ex","false");
    localStorage.setItem("hint","false");
    function addAndRemoveClassHidden(numOrOp){
        if(numOrOp=="num"){
            op[0].classList.add("Hidden");
            op[1].classList.add("Hidden");
            op[2].classList.add("Hidden");
            op[3].classList.add("Hidden");
            op[4].classList.add("Hidden");
            op[5].classList.add("Hidden");
            op[6].classList.add("Hidden");
            num[0].classList.remove("Hidden");
            num[1].classList.remove("Hidden");
            num[2].classList.remove("Hidden");
            num[3].classList.remove("Hidden");
            num[4].classList.remove("Hidden");
            num[5].classList.remove("Hidden");
            num[6].classList.remove("Hidden");
            num[7].classList.remove("Hidden");
            num[8].classList.remove("Hidden");
            num[9].classList.remove("Hidden");
        }else if(numOrOp=="op"){
            op[0].classList.remove("Hidden");
            op[1].classList.remove("Hidden");
            op[2].classList.remove("Hidden");
            op[3].classList.remove("Hidden");
            op[4].classList.remove("Hidden");
            op[5].classList.remove("Hidden");
            op[6].classList.remove("Hidden");
            num[0].classList.add("Hidden");
            num[1].classList.add("Hidden");
            num[2].classList.add("Hidden");
            num[3].classList.add("Hidden");
            num[4].classList.add("Hidden");
            num[5].classList.add("Hidden");
            num[6].classList.add("Hidden");
            num[7].classList.add("Hidden");
            num[8].classList.add("Hidden");
            num[9].classList.add("Hidden");
        };
    };
    cs.addEventListener("click",()=>{
        if (localStorage.getItem("firstComponent")==" "){
            localStorage.setItem("hint","false");
            localStorage.setItem("ex","false");
            if(localStorage.getItem("hint")=="false"){
                hintDescription.classList.add("hidden");
            };
            if(localStorage.getItem("ex")=="false"){
                exDescription.classList.add("hidden");
            };
            firstComponent.textContent = "";
            secondComponent.textContent = "";
            operation.textContent = "";
            trueAnswerIcon.classList.add("hidden");
            falseAnswerIcon.classList.add("hidden");
            result.textContent = "";
            localStorage.setItem("firstComponent",output.textContent);
            firstComponent.textContent= output.textContent;
            output.textContent = " ";
        }else  if (localStorage.getItem("firstComponent")!=" "&&localStorage.getItem("secondComponent")==" "){
            localStorage.setItem("secondComponent",output.textContent);
            secondComponent.textContent= output.textContent;
            if (output.textContent=="0") {
                op[0].classList.remove("Hidden");
                op[1].classList.remove("Hidden");
                op[2].classList.remove("Hidden");
                op[3].classList.remove("Hidden");
                op[5].classList.remove("Hidden");
                op[6].classList.remove("Hidden");
                num[0].classList.add("Hidden");
                num[1].classList.add("Hidden");
                num[2].classList.add("Hidden");
                num[3].classList.add("Hidden");
                num[4].classList.add("Hidden");
                num[5].classList.add("Hidden");
                num[6].classList.add("Hidden");
                num[7].classList.add("Hidden");
                num[8].classList.add("Hidden");
                num[9].classList.add("Hidden");
            }else{
                addAndRemoveClassHidden("op");
            };
            output.textContent = " ";
        }else if (localStorage.getItem("firstComponent")!=" "&&localStorage.getItem("secondComponent")!=" "&&localStorage.getItem("operation")==" "){
            localStorage.setItem("operation",output.textContent);
            operation.textContent=output.textContent;
            let trueOperation;
            if(Number(localStorage.getItem("firstComponent"))<Number(localStorage.getItem("secondComponent"))){
                trueOperation="<";
            }else if(Number(localStorage.getItem("firstComponent"))>Number(localStorage.getItem("secondComponent"))){
                trueOperation=">";
            }else if(Number(localStorage.getItem("firstComponent"))==Number(localStorage.getItem("secondComponent"))){
                trueOperation="=";
            }; 
                if(localStorage.getItem("operation")=="<"){
                    hintDescription.textContent = "1<2";
                    if(Number(localStorage.getItem("firstComponent"))<Number(localStorage.getItem("secondComponent"))){
                        result.textContent = "true";
                        trueAnswerIcon.classList.remove("hidden");
                        if (localStorage.getItem("hint")=="true") {
                            correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+1;
                            localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+1);
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                        }else {
                            correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+2;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+2);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("ex","false");
                        };
                    }else{
                        result.textContent = "false";
                        falseAnswerIcon.classList.remove("hidden");
                        if (localStorage.getItem("hint")=="true") {
                            wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+2;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+2);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                        }else {
                            wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+1;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+1);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("ex","false");
                        };
                    };
                }else if(localStorage.getItem("operation")==">"){
                    hintDescription.textContent = "2>1";
                    if(Number(localStorage.getItem("firstComponent"))>Number(localStorage.getItem("secondComponent"))){
                        result.textContent = "true";
                        trueAnswerIcon.classList.remove("hidden");
                        if (localStorage.getItem("hint")=="true") {
                            correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+1
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+1);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        }else {
                            correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+2;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+2);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        };
                    }else{
                        result.textContent = "false";
                        falseAnswerIcon.classList.remove("hidden");
                        if (localStorage.getItem("hint")=="true") {
                            wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+2;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+2);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        }else {
                            wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+1;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+1);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        };
                    };
                }else if(localStorage.getItem("operation")=="="){
                    hintDescription.textContent = "1=1";
                    if(Number(localStorage.getItem("firstComponent"))==Number(localStorage.getItem("secondComponent"))){
                        result.textContent = "true";
                        trueAnswerIcon.classList.remove("hidden");
                        if (localStorage.getItem("hint")=="true") {
                            correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+1
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+1);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        }else {
                            correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+2;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+2);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        };
                    }else{
                        result.textContent = "false";
                        falseAnswerIcon.classList.remove("hidden");
                        if (localStorage.getItem("hint")=="true") {
                            wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+2;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+2);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        }else {
                            wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+1;
                            exDescription.textContent = `${localStorage.getItem("firstComponent")} ${trueOperation} ${localStorage.getItem("secondComponent")}`;
                            localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+1);
                            HopeOrGreat();
                            localStorage.setItem("firstComponent", " ");
                            localStorage.setItem("secondComponent", " ");
                            localStorage.setItem("operation", " ");
                            localStorage.setItem("hint","false");
                            localStorage.setItem("ex","false");
                            addAndRemoveClassHidden("num");
                        };
                    };
                }
            output.textContent = " ";
            addAndRemoveClassHidden("num");
            let user = JSON.parse(localStorage.getItem("user"));
            let usersOb = JSON.parse(localStorage.getItem("users"));
            usersOb.forEach((mail)=>{
                if(mail.userEmail==user.userEmail){
                    Object.defineProperty(mail,'userCorrectAnswers',{value : `${localStorage.getItem("userCorrectAnswers")}`});
                    Object.defineProperty(mail,'userWrongAnswers',{value : `${localStorage.getItem("userWrongAnswers")}`});
                }; 
            });
            Object.defineProperty(user,'userCorrectAnswers',{value : `${localStorage.getItem("userCorrectAnswers")}`});
            Object.defineProperty(user,'userWrongAnswers',{value : `${localStorage.getItem("userWrongAnswers")}`})
            localStorage.setItem("users",JSON.stringify(usersOb));
            localStorage.setItem("user",JSON.stringify(user));
        }else if (localStorage.getItem("firstComponent")!=" "&&localStorage.getItem("secondComponent")!=" "&&localStorage.getItem("operation")!=" "){
            localStorage.setItem("userResult",output.textContent);
            if(localStorage.getItem("operation")=="+"){
                hintDescription.textContent = "1+2=3";
                if(Number(localStorage.getItem("firstComponent"))+Number(localStorage.getItem("secondComponent"))==localStorage.getItem("userResult")){
                    result.textContent = "true";
                    trueAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+1
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} + ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} + ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }
                }else {
                    result.textContent = "false";
                    falseAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} + ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))+Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+1;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} + ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))+Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }
                }
            }else if(localStorage.getItem("operation")=="-"){
                hintDescription.textContent = "3-2=1";
                if(Number(localStorage.getItem("firstComponent"))-Number(localStorage.getItem("secondComponent"))==localStorage.getItem("userResult")){
                    result.textContent = "true";
                    trueAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+1
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} - ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} - ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }
                }else {
                    result.textContent = "false";
                    falseAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} - ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))-Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+1;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} - ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))-Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }
                }
            }else if(localStorage.getItem("operation")=="x"){
                hintDescription.textContent = "2x3=6=2+2+2";
                if(Number(localStorage.getItem("firstComponent"))*Number(localStorage.getItem("secondComponent"))==localStorage.getItem("userResult")){
                    result.textContent = "true";
                    trueAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+1
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} x ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} x ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }
                }else {
                    result.textContent = "false";
                    falseAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} x ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))*Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+1;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} x ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))*Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }
                }
            }else if(localStorage.getItem("operation")=="÷"){
                hintDescription.textContent = "6÷3=2";
                if(Number(localStorage.getItem("firstComponent"))/Number(localStorage.getItem("secondComponent"))==localStorage.getItem("userResult")){
                    result.textContent = "true";
                    trueAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+1
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} ÷ ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        correctAnswersOutput.textContent = Number(correctAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} ÷ ${localStorage.getItem("secondComponent")} = ${localStorage.getItem("userResult")}`;
                        localStorage.setItem("userCorrectAnswers",Number(localStorage.getItem("userCorrectAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }
                }else {
                    result.textContent = "false";
                    falseAnswerIcon.classList.remove("hidden");
                    if (localStorage.getItem("hint")=="true") {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+2;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} ÷ ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))/Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+2);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("hint","false");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    }else {
                        wrongAnswersOutput.textContent = Number(wrongAnswersOutput.textContent)+1;
                        exDescription.textContent = `${localStorage.getItem("firstComponent")} ÷ ${localStorage.getItem("secondComponent")} = ${Number(localStorage.getItem("firstComponent"))/Number(localStorage.getItem("secondComponent"))}`;
                        localStorage.setItem("userWrongAnswers",Number(localStorage.getItem("userWrongAnswers"))+1);
                        HopeOrGreat();
                        localStorage.setItem("firstComponent", " ");
                        localStorage.setItem("secondComponent", " ");
                        localStorage.setItem("operation", " ");
                        localStorage.setItem("userResult", " ");
                        localStorage.setItem("ex","false");
                        addAndRemoveClassHidden("num");
                    };
                };
            };
            output.textContent = " ";
            let user = JSON.parse(localStorage.getItem("user"));
            let usersOb = JSON.parse(localStorage.getItem("users"));
            usersOb.forEach((mail)=>{
                if(mail.userEmail==user.userEmail){
                    Object.defineProperty(mail,'userCorrectAnswers',{value : `${localStorage.getItem("userCorrectAnswers")}`});
                    Object.defineProperty(mail,'userWrongAnswers',{value : `${localStorage.getItem("userWrongAnswers")}`});
                }; 
            });
            Object.defineProperty(user,'userCorrectAnswers',{value : `${localStorage.getItem("userCorrectAnswers")}`});
            Object.defineProperty(user,'userWrongAnswers',{value : `${localStorage.getItem("userWrongAnswers")}`})
            localStorage.setItem("users",JSON.stringify(usersOb));
            localStorage.setItem("user",JSON.stringify(user));
        };
    });
};
function Check(){
    // footer
    let dateNow = new Date();
    footer[0].textContent = `Kid Calc © ${dateNow.getFullYear()}`;
    footer[1].textContent = `Kid Calc © ${dateNow.getFullYear()}`;
    // login or not
    if(localStorage.getItem("login")=="true"){
        signInSection.classList.add("hidden");
        logInSection.classList.add("hidden");
        updateSection.classList.add("hidden");
        updateSection.classList.add("hidden");
        themesSection.classList.add("hidden");
        UpdateThemeSection.classList.add("hidden");
        addThemeSection.classList.add("hidden");
        demoSection.classList.add("hidden");
        addAndUpdateSection.classList.add("hidden");
        nav.classList.remove("hidden");
        op[0].classList.add("Hidden");
        op[1].classList.add("Hidden");
        op[2].classList.add("Hidden");
        op[3].classList.add("Hidden");
        op[4].classList.add("Hidden");
        op[5].classList.add("Hidden");
        op[6].classList.add("Hidden");
        dataHandler(JSON.parse(localStorage.getItem("user")));
    }else{
        nav.classList.add("hidden");
        infoBarSection.classList.add("hidden");
        calcSection.classList.add("hidden");
        updateSection.classList.add("hidden");
        updateSection.classList.add("hidden");
        themesSection.classList.add("hidden");
        UpdateThemeSection.classList.add("hidden");
        addThemeSection.classList.add("hidden");
        demoSection.classList.add("hidden");
        addAndUpdateSection.classList.add("hidden");
        if(localStorage.getItem("toSingIn")=="true"){
            logInSection.classList.add("hidden");
            localStorage.setItem("toLogIn","false");
            signInSection.classList.remove("hidden");
            SignIn();
        }else if(localStorage.getItem("toLogIn")=="true"){
            signInSection.classList.add("hidden");
            localStorage.setItem("toSingIn","false");
            logInSection.classList.remove("hidden");
            LogIn();
        };
    };
}; 
toSingInSection.addEventListener("click",()=>{
    localStorage.setItem("toSingIn","true");
    localStorage.setItem("toLogIn","false");
    Check();
});
toLoginSection.addEventListener("click",()=>{
    localStorage.setItem("toLogIn","true");
    localStorage.setItem("toSingIn","false");
    Check();
});
// sing in
function SignIn(){
    singPasswordImg.addEventListener("click",function(){
        singPassword.setAttribute("type","text");
        singPasswordImg.classList.add("hidden");
        singPasswordImgSlash.classList.remove("hidden");
    });
    singPasswordImgSlash.addEventListener("click",function(){
        singPassword.setAttribute("type","password");
        singPasswordImgSlash.classList.add("hidden");
        singPasswordImg.classList.remove("hidden");
    });
    singPasswordAgainImg.addEventListener("click",function(){
        singPasswordAgain.setAttribute("type","text");
        singPasswordAgainImg.classList.add("hidden");
        singPasswordAgainImgSlash.classList.remove("hidden");
    });
    singPasswordAgainImgSlash.addEventListener("click",function(){
        singPasswordAgain.setAttribute("type","password");
        singPasswordAgainImgSlash.classList.add("hidden");
        singPasswordAgainImg.classList.remove("hidden");
    });
    singInBtn.addEventListener("click",function(){
        if(singPassword.value!=""){
            if(singPassword.value==singPasswordAgain.value){
                if(signAge.value!="" && signEmail.value!="" && signAge.value!="" && singPassword.value!="" && singUserName.value!=""){ 
                    let user = {
                        id:1,
                        userName : singUserName.value.trim(),
                        userPassword : singPassword.value.trim(),
                        userAge : signAge.value.trim(),
                        userEmail : signEmail.value.trim(),
                        userFavoriteTheme : selectedTheme.value,
                        userCorrectAnswers : 0,
                        userWrongAnswers : 0,
                        userThemes:[
                                        {Name:"Pharaohs",MainColor:"#bd8f4d",SecondColor:"#000000",ThirdColor:"#ffffff",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/pharaoh.png"},
                                        {Name:"Technology",MainColor:"#89d6fb",SecondColor:"#00303f",ThirdColor:"#d4f0fc",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/technology.png"},
                                        {Name:"Space",MainColor:"#05377b",SecondColor:"#010b19",ThirdColor:"#89d6fb",AlertColor:"#ff0000",SuccessColor:"#0ee432",Image:"/assets/images/space.png"},
                                    ]
                    };
                    if(localStorage.getItem("users")==null){
                        localStorage.setItem("users",JSON.stringify([user]));
                        localStorage.setItem("user",JSON.stringify(user));
                        localStorage.setItem("userCorrectAnswers",user.userCorrectAnswers);
                        localStorage.setItem("userWrongAnswers",user.userWrongAnswers);
                        dataHandler(user);
                    }else{
                        let usersOb = JSON.parse(localStorage.getItem("users"));
                        if(usersOb.every((mail)=>{return mail.userEmail!=user.userEmail})){
                            Object.defineProperty(user,'id',{value:`${Number(usersOb.length)+1}`});
                            usersOb.push(user);
                            localStorage.setItem("user",JSON.stringify(user));
                            localStorage.setItem("users",JSON.stringify(usersOb));
                            dataHandler(user);
                        }else{
                            emailUsed.classList.remove("hidden");
                            emailUsed.textContent="This email has already been used";
                        };
                    };
    
                }else{
                    emailUsed.classList.remove("hidden");
                    emailUsed.textContent="You should to complete all fields";
                };
            }else{
                emailUsed.classList.remove("hidden");
                emailUsed.textContent="Password Equation Error";
            };
        };
    });
};
// login
function LogIn(){
    loginPasswordImg.addEventListener("click",function(){
        loginPassword.setAttribute("type","text");
        loginPasswordImg.classList.add("hidden");
        loginPasswordImgSlash.classList.remove("hidden");
    });
    loginPasswordImgSlash.addEventListener("click",function(){
        loginPassword.setAttribute("type","password");
        loginPasswordImgSlash.classList.add("hidden");
        loginPasswordImg.classList.remove("hidden");
    });
    logInBtn.addEventListener("click",function(){
        if(loginEmail.value!="" && loginPassword.value!=""){
            let ob = {userEmail:loginEmail.value.trim(),userPassword:loginPassword.value.trim()};
            let usersOb = JSON.parse(localStorage.getItem("users"));
            if(localStorage.getItem("users")==null){
                unknownEmail.classList.remove("hidden");
                unknownEmail.textContent="You are the first account in our website";
            }else{
                usersOb.forEach((user)=>{
                    if(user.userEmail==ob.userEmail){
                        if(user.userPassword==ob.userPassword){
                            localStorage.setItem("user",JSON.stringify(user));
                            localStorage.setItem("userCorrectAnswers",user.userCorrectAnswers);
                            localStorage.setItem("userWrongAnswers",user.userWrongAnswers);
                            dataHandler(user);
                        }else{
                            unknownEmail.classList.remove("hidden");
                            unknownEmail.textContent="Your password isn't Correct";
                        };
                    }else{
                        unknownEmail.classList.remove("hidden");
                        unknownEmail.textContent="Your email isn't Correct";
                    };
                });
            }; 
        }else{
            unknownEmail.classList.remove("hidden");
            unknownEmail.textContent="You should to complete all fields";
        };
    });
};
// handel data
function dataHandler(user){
    signInSection.classList.add("hidden");
    logInSection.classList.add("hidden");
    updateSection.classList.add("hidden");
    themesSection.classList.add("hidden");
    UpdateThemeSection.classList.add("hidden");
    addThemeSection.classList.add("hidden");
    demoSection.classList.add("hidden");
    addAndUpdateSection.classList.add("hidden");
    infoBarSection.classList.remove("hidden");
    calcSection.classList.remove("hidden");
    nav.classList.remove("hidden");
    op[0].classList.add("Hidden");
    op[1].classList.add("Hidden");
    op[2].classList.add("Hidden");
    op[3].classList.add("Hidden");
    op[4].classList.add("Hidden");
    op[5].classList.add("Hidden");
    localStorage.setItem("login","true");
    let firstSpace = user.userName.indexOf(" ");
    userNameOutput[0].innerHTML = `<i class="fa-solid fa-gear"></i>${user.userName.slice(0,firstSpace)}`;
    userNameOutput[1].innerHTML = `<i class="fa-solid fa-gear"></i>${user.userName.slice(0,firstSpace)}`;
    userNameOutput[2].textContent = user.userName;
    userNameOutput[3].innerHTML = `<i class="fa-solid fa-gear"></i>${user.userName.slice(0,firstSpace)}`;
    ageOutput.textContent = user.userAge;
    correctAnswersOutput.textContent = user.userCorrectAnswers;
    wrongAnswersOutput.textContent = user.userWrongAnswers;
    if(user.userThemes.length!=0){
        user.userThemes.forEach((theme)=>{
            if(theme.Name==user.userFavoriteTheme){
                let mainColor = theme.MainColor;
                let secondColor = theme.SecondColor;
                let thirdColor = theme.ThirdColor;
                let alertColor = theme.AlertColor;
                let successColor = theme.SuccessColor;
                let image = theme.Image;
                document.styleSheets[0].cssRules[1].style.setProperty("--main-color",`${mainColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--second-color",`${secondColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--th3-color",`${thirdColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--alert-color",`${alertColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--success-color",`${successColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-main-color",`${mainColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-second-color",`${secondColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-th3-color",`${thirdColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-alert-color",`${alertColor}`);
                document.styleSheets[0].cssRules[1].style.setProperty("--demo-success-color",`${successColor}`);                                            
                img[0].setAttribute("src",image);
                img[0].setAttribute("alt",user.userFavoriteTheme);
                img[1].setAttribute("src",image);
                img[1].setAttribute("alt",user.userFavoriteTheme);
                img[2].setAttribute("src",image);
                img[2].setAttribute("alt",user.userFavoriteTheme);
                img[3].setAttribute("src",image);
                img[3].setAttribute("alt",user.userFavoriteTheme);
                imgDemo.setAttribute("src",image);
            }else if(theme.Name!=user.userFavoriteTheme&&user.userThemes.length==1){
                let usersOb = JSON.parse(localStorage.getItem("users"));
                let userOb = JSON.parse(localStorage.getItem("user"));
                Object.defineProperty(userOb,'userFavoriteTheme',{value : `${user.userThemes[0].Name}`});
                localStorage.setItem("user",JSON.stringify(userOb));
                usersOb.forEach((mail)=>{
                    if(mail.userEmail==user.userEmail){
                        Object.defineProperty(mail,'userFavoriteTheme',{value : `${user.userThemes[0].Name}`});
                    }; 
                });
                localStorage.setItem("users",JSON.stringify(usersOb));
                Check();
            }
        });
    };
    // this for who min the screen in pc or laptop or for some one test my code 😁
    if(document.defaultView.innerWidth<=630){
        barIconDiv.classList.remove("hidden");
        barSection.classList.add("hidden");
        barIconDiv.addEventListener("click",()=>{
            barIconDiv.classList.add("hidden");
            barSection.classList.remove("hidden");
            barIconDivClicked.classList.remove("hidden");
        });
        barIconDivClicked.addEventListener("click",()=>{
            barIconDiv.classList.remove("hidden");
            barSection.classList.add("hidden");
            barIconDivClicked.classList.add("hidden");
        });
    }else{
        barIconDiv.classList.add("hidden");
        barSection.classList.add("hidden");
        barIconDivClicked.classList.add("hidden");
    };
    HeaderSettings();
    Calc();
    HopeOrGreat();
};
function HopeOrGreat(){
    if(Number(correctAnswersOutput.textContent)>+wrongAnswersOutput.textContent){
        hopeOrGreat.textContent = "Great Job.";
    }else if(Number(correctAnswersOutput.textContent)<+wrongAnswersOutput.textContent){
        hopeOrGreat.textContent = "Failure is not an attempt that did not succeed, but not trying, so do not stop trying.";
    }else if(Number(correctAnswersOutput.textContent)==Number(wrongAnswersOutput.textContent)&&Number(correctAnswersOutput.textContent)==0){
        hopeOrGreat.textContent = "Start your Journey now.";
    }else if(Number(correctAnswersOutput.textContent)==Number(wrongAnswersOutput.textContent)){
        hopeOrGreat.textContent = "You are on the way.";
    };
};
Check();