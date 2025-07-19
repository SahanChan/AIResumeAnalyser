const { formatSize } = require('./app/lib/utils.ts');

// Test cases
console.log('Testing formatSize function:');
console.log('0 bytes:', formatSize(0));
console.log('512 bytes:', formatSize(512));
console.log('1024 bytes (1 KB):', formatSize(1024));
console.log('1536 bytes (1.5 KB):', formatSize(1536));
console.log('1048576 bytes (1 MB):', formatSize(1048576));
console.log('1572864 bytes (1.5 MB):', formatSize(1572864));
console.log('1073741824 bytes (1 GB):', formatSize(1073741824));
console.log('20971520 bytes (20 MB):', formatSize(20971520));
console.log('21474836480 bytes (20 GB):', formatSize(21474836480));

// Test with different decimal places
console.log('\nTesting with different decimal places:');
console.log('1536 bytes (0 decimals):', formatSize(1536, 0));
console.log('1536 bytes (1 decimal):', formatSize(1536, 1));
console.log('1536 bytes (3 decimals):', formatSize(1536, 3));