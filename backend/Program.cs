using backend;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => new DummyRunner().HandleAsync());


app.Run();