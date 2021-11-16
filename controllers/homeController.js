exports.showJobs = (req, res) => {
    res.render("home", {
        pagName: "DevJobs",
        tagline: "Encuentra y Publica trabajos para desarrolladores Web.",
        barra: true,
        boton: true
    })
}