// Função para redimensionar e definir a imagem de perfil
function setProfileImage(file, targetSelector, width, height) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;

        const image = new Image();
        image.src = imageUrl;
        image.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Redimensiona a imagem
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, 0, 0, width, height);

            // Atualiza o plano de fundo do elemento de perfil
            const profile = document.querySelector(targetSelector);
            profile.style.backgroundImage = `url(${canvas.toDataURL()})`;
        };
    };
    reader.readAsDataURL(file);
}

// Captura o evento de mudança do campo de upload
document.getElementById("upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        // Define a imagem de perfil para o perfil principal
        setProfileImage(file, ".profile-img2", 160, 160);

        // Define a imagem de perfil para o perfil do menu
        setProfileImage(file, ".profile-img", 90, 90);
    }
});
