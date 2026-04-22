using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }

    // GET: api/products/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            return NotFound(new { message = $"Product with Id = {id} not found." });
        }

        return product;
    }

    // POST: api/products
    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<Product>> CreateProduct(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }

    // PUT: api/products/5
    [HttpPut("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> UpdateProduct(int id, Product product)
    {
        if (id != product.Id)
        {
            return BadRequest(new { message = "Id in URL does not match Id in request body." });
        }

        var existingProduct = await _context.Products.FindAsync(id);
        if (existingProduct == null)
        {
            return NotFound(new { message = $"Product with Id = {id} not found." });
        }

        // Update all fields
        existingProduct.Name = product.Name;
        existingProduct.Price = product.Price;
        existingProduct.SalePrice = product.SalePrice;
        existingProduct.Category = product.Category;
        existingProduct.Description = product.Description;
        existingProduct.ImageUrl = product.ImageUrl;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/products/5
    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound(new { message = $"Product with Id = {id} not found." });
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // GET: api/products/admin-test
    // Endpoint bảo vệ — chỉ Admin mới truy cập được
    [HttpGet("admin-test")]
    [Authorize(Roles = "Admin")]
    public IActionResult AdminTest()
    {
        return Ok(new { message = "Bạn đang truy cập với quyền Admin!" });
    }
}
