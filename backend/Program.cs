using backend;

var builder = WebApplication.CreateBuilder();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(c => c.AllowAnyOrigin());

// Only for debugging:
//app.UseFileServer(enableDirectoryBrowsing: true);
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api", () => new DummyRunner().HandleAsync());
app.Run();