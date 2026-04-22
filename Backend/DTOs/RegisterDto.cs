using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs;

public class RegisterDto
{
    [Required(ErrorMessage = "Tên người dùng là bắt buộc.")]
    [MinLength(3, ErrorMessage = "Tên người dùng phải có ít nhất 3 ký tự.")]
    [MaxLength(50, ErrorMessage = "Tên người dùng không được vượt quá 50 ký tự.")]
    public string Username { get; set; } = string.Empty;

    [Required(ErrorMessage = "Email là bắt buộc.")]
    [EmailAddress(ErrorMessage = "Email không hợp lệ.")]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Mật khẩu là bắt buộc.")]
    [MinLength(6, ErrorMessage = "Mật khẩu phải có ít nhất 6 ký tự.")]
    public string Password { get; set; } = string.Empty;
}
