export function replaceTagP(content: string) {
    const hasNewline = content.includes('\n');
    let returnData = content;
    if (hasNewline) {
        const lines = content.split('\n');
        returnData = lines.map(line => {
            line = line.trim();     
            if (line !== '') {
                line = `<p>${line}</p>`;
            }
            
            return line;
        }).join('\n');
    }    
    return returnData
}