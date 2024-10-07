let sommeDue = 0;

document.getElementById('ajouter').addEventListener('click', function() {
    let montant = parseInt(document.getElementById('montant').value);
    if (!isNaN(montant) && montant > 0) {
        sommeDue += montant;
        document.getElementById('somme_due').textContent = sommeDue;
        document.getElementById('montant').value = '';
    }
});

document.getElementById('calculer').addEventListener('click', function() {
    let montantVerse = parseInt(document.getElementById('verse').value);
    let reste = montantVerse - sommeDue;
    
    if (!isNaN(reste) && reste >= 0) {
        let Nb10E = Math.floor(reste / 10);
        reste = reste % 10;
        
        let Nb5E = Math.floor(reste / 5);
        reste = reste % 5;
        
        document.getElementById('billets10').textContent = Nb10E;
        document.getElementById('billets5').textContent = Nb5E;
        document.getElementById('pieces1').textContent = reste;
    } else {
        alert("Le montant versé est insuffisant.");
    }
});
