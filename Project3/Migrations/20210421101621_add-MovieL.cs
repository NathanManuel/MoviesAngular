﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Project3.Migrations
{
    public partial class addMovieL : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MovieL",
                table: "Movie",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MovieL",
                table: "Movie");
        }
    }
}
