using backend;

var builder = WebApplication.CreateBuilder(args);




var app = builder.Build();


app.UseFileServer(enableDirectoryBrowsing: true);

// app.UseStaticFiles();
// app.UseDirectoryBrowser();

app.MapGet("/", () => new DummyRunner().HandleAsync());
app.Run();