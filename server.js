app.get("/api/tables", function(req,res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req,res) {
    return res.json(waitlist);
});