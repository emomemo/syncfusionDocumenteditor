
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
import { TitleBar } from './title-bar';
import * as data from './data-default.json';


/**
 * Default document editor sample
 */

    
    let hostUrl: string = 'https://services.syncfusion.com/js/production/api/documenteditor/';

    let container: DocumentEditorContainer = new DocumentEditorContainer({ serviceUrl:hostUrl,enableToolbar: true, height: '590px' });
    DocumentEditorContainer.Inject(Toolbar);
    container.appendTo('#container');

    let titleBar: TitleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.documentEditor, true);
    container.documentEditor.open(JSON.stringify((<any>data)));
    container.documentEditor.documentName = 'Getting Started';
    titleBar.updateDocumentTitle();

    container.documentChange = (): void => {
        titleBar.updateDocumentTitle();
        container.documentEditor.focusIn();
    };

