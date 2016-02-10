/**
 * @file Script contenant les fonctions de base
 * @author Jonathan Martel (jmartel@gmail.com)
 * @version 0.1
 * @update 2013-12-11
 * @license Creative Commons BY-NC 3.0 (Licence Creative Commons Attribution - Pas d’utilisation commerciale 3.0 non transposé)
 * @license http://creativecommons.org/licenses/by-nc/3.0/deed.fr
 *
 */

/**
 * Vérifie le formulaire ajout admin
 * @access public
 * @author Jorge Blanco
 */
function validerFormAjoutAdmin()
{
    var form = document.getElementById("FormAjoutAdmin");
    var valide=true;
    for (i=0;i<form.elements.length;i++)
    {
        if(form.elements[i].value == "")
        {
            valide=false;
            document.getElementById('erreurPrenom').innerHTML = 'remplir ce champ';     
        }
    }
    
    if(valide==true)
    {
        document.FormAjoutAdmin.submit();
    }   
}


function validerFormAInscription()
{
    
    var valide=true;
    var valide_valide=false;
    
    $utilisateur= $("#utilisateur");
    $motDePasse1 = $("#motDePasse1");
    $motDePasse2 = $("#motDePasse2");
    $prenom = $("#prenom");
    $nom = $("#nom");
    $email = $("#email");
    $telephone = $("#telephone");
    $bio= $("#bio");
   
    if(valide_valide==false)
    {
        if($utilisateur.val().length < 4){
        $( "#msjUtilisateur1" ).css("display", "block");
        valide=false;
        }
//        http://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
        else if(!$utilisateur.val().match(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/)){
            $("#msjUtilisateur2" ).css("display", "block");
            $( "#msjUtilisateur1" ).css("display", "none");
            valide=false;
        }else{
            $("#msjUtilisateur1" ).css("display", "none");
            $("#msjUtilisateur2" ).css("display", "none");
        }
        

        if($motDePasse1.val().length < 1 ){
        $( "#msjMotDePasse1" ).css("display", "block");
        valide=false;
        }else{
            $( "#msjMotDePasse1" ).css("display", "none");
        }

        if($motDePasse2.val() != $motDePasse1.val()){
        $( "#msjMotDePasse2" ).css("display", "block");
        valide=false;
        }else{
            $( "#msjMotDePasse2" ).css("display", "none");
        }

        
        
//        http://www.godsavethegeek.com/autre/regex-caracteres-accentues-prenom-nom
        if(!$prenom.val().match(/^[a-zA-ZÀ-ÿ\s\'-]{4,29}$/)){
        $( "#msjPrenom" ).css("display", "block");
        valide=false;
        }else{
            $( "#msjPrenom" ).css("display", "none");
        }

        
        
        if(!$nom.val().match(/^[a-zA-ZÀ-ÿ\s\'-]{4,29}$/)){
        $( "#msjNom" ).css("display", "block");
        valide=false;
        }else{
            $( "#msjNom" ).css("display", "none");
        }

        
//      http://web.ontuts.com/tutoriales/como-validar-un-formulario-con-php-y-javascript-jquery/        
        if(!$email.val().match(/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i)){
        $( "#msjEmail" ).css("display", "block");
        valide=false;
        }else{
            $( "#msjEmail" ).css("display", "none");
        }

        
        
//      http://www.regexplanet.com/advanced/javascript/index.html
        if(!$telephone.val().match(/D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})/)){
        $( "#msjTelephone" ).css("display", "block");
        valide=false;
        }else{
            $( "#msjTelephone" ).css("display", "none");
        }

        if(!$("#bio").val().match(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/)){
            $( "#msjBio" ).css("display", "block");
            valide=false;
        }else{
            $( "#msjBio" ).css("display", "none");
        }
        
    }
    else
    {
        valide=true;
        valide_valide=false;
    }
    
    
    
    
    if(valide==true && valide_valide==false){    
      
      document.formInscription.submit();
    }


}




//    
//    $(document).ready(function() {
//    $("#ok").hide();
//
//    $("#formInscription").validate({
//        rules: {
//            bio: { required: true, minlength: 2},
//            utilisateur: { required: true, minlength: 2},
//            motDePasse : { required: true, minlength: 2},
//
//        },
//        messages: {
//            bio: "Debe introducir su nombre.",
//            utilisateur: "Debe introducir su apellido.",
//            motDePasse : "Debe introducir un email válido.",
//
//        submitHandler: function(form){
//            var dataString = 'bio='+$('#bio').val()+'&utilisateur='+$('#utilisateur').val()+'...';
//            $.ajax({
//                type: "POST",
//                url:"send.php",
//                data: dataString,
//                success: function(data){
//                    $("#ok").html(data);
//                    $("#ok").show();
//                    $("#formid").hide();
//                }
//            });
//        }
//    });
//});
//    


/**
 * Encrypte le formulaire de connexion
 * @access public
 * @author Gautier Piatek
 */
function encrypte()
{
    //encrypte et envoi le formulaire caché
    var passwordEncrypte = md5(document.loginForm.motDePasse.value);
    var grainSel = document.formEncrypte.grainSel.value;

    //formule: md5(grainSel . md5(password))
    var passwordEncryptePlusGrainSel = md5(grainSel + passwordEncrypte);
    document.formEncrypte.utilisateur.value = document.loginForm.utilisateur.value;
    document.formEncrypte.motDePasse.value = passwordEncryptePlusGrainSel;
    document.formEncrypte.submit();
}