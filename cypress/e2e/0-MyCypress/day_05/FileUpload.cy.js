describe('File Upload', () => {
    it('single file upload', () => {
        // cypress-file-upload plugin i yuklenmesi lazim
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        const path1 = 'avoid-distraction.png'

        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('have.text',path1)
    });

    it('multiple file upload 1', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        const path1 = 'avoid-distraction.png'
        const path2 = 'emotions.png'
        const path3 = 'routine.png'

        cy.get('#filesToUpload').attachFile(path1).wait(2000).attachFile(path2).wait(2000).attachFile(path3)
    });

    it('multiple file upload 2', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        const path1 = 'avoid-distraction.png'
        const path2 = 'emotions.png'
        const path3 = 'routine.png'

        cy.get('#filesToUpload').attachFile([path1,path2,path3])
    });

    
});