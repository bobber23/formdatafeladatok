const form = document.getElementById('carForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
        if (!value.trim()) {
            alert('Kérlek tölts ki minden mezőt!');
            return;
        }
    }

    const data = Object.fromEntries(formData.entries());

    data.ev = parseInt(data.ev);
    data.loero = parseInt(data.loero);
    data.km = parseFloat(data.km);
    data.fogyasztas = parseFloat(data.fogyasztas);
    data.uzemanyag_szint = parseFloat(data.uzemanyag_szint);

    try {
        const response = await fetch('http://localhost:3000/api/autok', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Hiba történt!');
        }

        alert('Sikeres hozzáadás!');

        form.reset();
    } catch (error) {
        console.error(error);
        alert('Hiba a mentés során!');
    }
});
