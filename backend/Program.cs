using backend;
var app = WebApplication.Create();

app.UseStaticFiles();

app.MapGet("/api", () => new DummyRunner().HandleAsync());
app.Run();