module ShiftLeft(input[31:0] in,
		output[31:0] out);

	assign out = in &lt;&lt; 2;

endmodule

