/*******************************************************************************
 * Copyright (c) 2018-2020 Maxprograms.
 *
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License 1.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/org/documents/epl-v10.html
 *
 * Contributors:
 *     Maxprograms - initial API and implementation
 *******************************************************************************/

 var _b = require('electron');

 class About {
     constructor() {
        _b.ipcRenderer.send('get-version');

        _b.ipcRenderer.on('set-version', (event, arg) => {
            document.getElementById('xliffmanager').innerHTML = 'XLIFF Manager ' + arg.xliffManager;
            document.getElementById('openxliff').innerHTML = arg.tool + '<br/>Version: ' + arg.version + '<br/>Build: ' + arg.build;
        });
     }
}

new About();