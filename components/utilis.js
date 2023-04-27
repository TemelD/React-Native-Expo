import * as React from 'expo-file-system';

export const WriteFile = async (data) => {
    //vérifier le contenu de data


    try {
        //vérifier si le fichier est vide
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.doc)

        //si non récuperer les données 
            if (fileInfo.exists) {

            } 
            // si oui ecrire dans le fichier
            else {

            }
        // si oui ecrire dans le fichier
    } catch (error) {
        console.log('erreur non catche wtriteFile', error)
    }
}
