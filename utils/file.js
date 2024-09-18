const fs = require("fs");
const path = require("path");
const { appLogger } = require("../config/logger"); // Import appLogger

/**
 * Deletes a file based on the provided file path.
 * @param {string} filePath - The path to the file to be deleted.
 * @returns {Promise<void>} - A promise that resolves when the file is deleted.
 * @throws {Error} - Throws an error if the file cannot be deleted.
 */
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    // Ensure the file path is an absolute path
    const absolutePath = path.resolve(filePath);

    fs.unlink(absolutePath, (err) => {
      if (err) {
        // If there's an error, reject the promise
        appLogger.error(
          `Error deleting file at ${absolutePath}: ${err.message}`,
          { stack: err.stack }
        );
        reject(new Error(`Unable to delete file at ${absolutePath}`));
      } else {
        // Resolve the promise if the file is successfully deleted
        appLogger.info(`File successfully deleted at ${absolutePath}`);
        resolve();
      }
    });
  });
};

/**
 * Deletes multiple files based on the provided file paths.
 * @param {string[]} filePaths - An array of file paths to be deleted.
 * @returns {Promise<void[]>} - A promise that resolves when all files are deleted.
 * @throws {Error} - Throws an error if any file cannot be deleted.
 */
const deleteFiles = (filePaths) => {
  return Promise.all(filePaths.map((filePath) => deleteFile(filePath)));
};

module.exports = {
  deleteFile,
  deleteFiles,
};
