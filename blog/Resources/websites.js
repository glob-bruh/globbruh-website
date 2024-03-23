
// Warn the user that they are entering the unknown.
function wRedr(website) {
    cText = `GLOBBRUH - NOTE:
You are about to be redirected to the following external website:
${website}
I cannot be held liable for what this external page contains, nor do I condone it's content. 
Are you sure you want to continue?`;
    resp = confirm(cText)
    if (resp == true) {
        window.open(website)
    }
}