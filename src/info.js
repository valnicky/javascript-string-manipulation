const usage = "Usage: crlf-convert [CR|LF|CRLF]";

const help = `${usage}  


   Converts text between newline String.raw `(\\n)`, carriage return String.raw `(\\r)`, and combined
  String.raw `(\\r``\\n)` line endings.
  Options:
  [CR|LF|CRLF]: Desired line ending
      CR is a carriage return character String.raw `\\r` (rare)
      LF is a line feed character String.raw `\\n` (common on Unix and macOS)
      CRLF is a combined ending String.raw `\\r\\n` (common on Windows)
  Example:
  
      cat in.txt | crlf-convert LF > out.txt`;

module.exports = {
  help,
  usage
};
