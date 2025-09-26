module.exports = async (req, res) => {
  const { title = 'Developer', subtitle = 'Coding the Future', theme = 'cyberpunk' } = req.query;
  
  const width = 800;
  const height = 120;
  
  // Generate a simple PNG using pure Node.js buffer manipulation
  const createPNG = (width, height, pixelData) => {
    const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
    
    const IHDR = Buffer.alloc(25);
    IHDR.writeUInt32BE(13, 0); // Length
    IHDR.write('IHDR', 4);
    IHDR.writeUInt32BE(width, 8);
    IHDR.writeUInt32BE(height, 12);
    IHDR.writeUInt8(8, 16); // Bit depth
    IHDR.writeUInt8(2, 17); // Color type (RGB)
    IHDR.writeUInt8(0, 18); // Compression
    IHDR.writeUInt8(0, 19); // Filter
    IHDR.writeUInt8(0, 20); // Interlace
    
    // Simple CRC calculation for IHDR
    const crc = require('zlib').crc32(IHDR.slice(4, 21));
    IHDR.writeUInt32BE(crc >>> 0, 21);
    
    const IDAT = Buffer.alloc(pixelData.length + 8);
    IDAT.writeUInt32BE(pixelData.length, 0);
    IDAT.write('IDAT', 4);
    pixelData.copy(IDAT, 8);
    
    const crc2 = require('zlib').crc32(IDAT.slice(4, IDAT.length - 4));
    IDAT.writeUInt32BE(crc2 >>> 0, IDAT.length - 4);
    
    const IEND = Buffer.from([0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);
    
    return Buffer.concat([PNG_SIGNATURE, IHDR, IDAT, IEND]);
  };
  
  // Create pixel data (simplified gradient effect)
  const pixels = Buffer.alloc(width * height * 3);
  
  const themes = {
    cyberpunk: { r: 0, g: 217, b: 255 },
    neon: { r: 255, g: 0, b: 255 }
  };
  
  const color = themes[theme] || themes.cyberpunk;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      // Create gradient effect
      const intensity = Math.sin((x / width) * Math.PI) * 0.3 + 0.7;
      pixels[idx] = Math.floor(color.r * intensity);     // R
      pixels[idx + 1] = Math.floor(color.g * intensity); // G
      pixels[idx + 2] = Math.floor(color.b * intensity); // B
    }
  }
  
  const compressed = require('zlib').deflateSync(pixels);
  const png = createPNG(width, height, compressed);
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(png);
};
