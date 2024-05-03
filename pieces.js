// Function to orient and return the points of each piece based on its type and rotation
function orientPoints(pieceType, rotation) {
  // Initialize an empty array to store the resulting points
  let results = [];

  // Switch based on the piece type
  switch (pieceType) {
    // Case for straight piece (pieceType 0)
    case 0:
      // Switch based on the rotation
      switch (rotation) {
        // Case for rotation 0
        case 0:
          // Set the points for rotation 0
          results = [
            [-2, 0],
            [-1, 0],
            [0, 0],
            [1, 0],
          ];
          break;
        // Case for rotation 1
        case 1:
          // Set the points for rotation 1
          results = [
            [0, -1],
            [0, 0],
            [0, 1],
            [0, 2],
          ];
          break;
        // Case for rotation 2
        case 2:
          // Set the points for rotation 2
          results = [
            [-2, 1],
            [-1, 1],
            [0, 1],
            [1, 1],
          ];
          break;
        // Case for rotation 3
        case 3:
          // Set the points for rotation 3
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [-1, 2],
          ];
          break;
      }
      break;
    // Case for L-shaped piece (pieceType 1)
    case 1:
      // Switch based on the rotation
      switch (rotation) {
        // Case for rotation 0
        case 0:
          // Set the points for rotation 0
          results = [
            [-2, -1],
            [-2, 0],
            [-1, 0],
            [0, 0],
          ];
          break;
        // Case for rotation 1
        case 1:
          // Set the points for rotation 1
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
          ];
          break;
        // Case for rotation 2
        case 2:
          // Set the points for rotation 2
          results = [
            [-2, 0],
            [-1, 0],
            [0, 0],
            [0, 1],
          ];
          break;
        // Case for rotation 3
        case 3:
          // Set the points for rotation 3
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [-2, 1],
          ];
          break;
      }
      break;
    // Case for reverse L-shaped piece (pieceType 2)
    case 2:
      // Switch based on the rotation
      switch (rotation) {
        // Case for rotation 0
        case 0:
          // Set the points for rotation 0
          results = [
            [-2, 0],
            [-1, 0],
            [0, 0],
            [0, -1],
          ];
          break;
        // Case for rotation 1
        case 1:
          // Set the points for rotation 1
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
          ];
          break;
        // Case for rotation 2
        case 2:
          // Set the points for rotation 2
          results = [
            [-2, 0],
            [-2, 1],
            [-1, 0],
            [0, 0],
          ];
          break;
        // Case for rotation 3
        case 3:
          // Set the points for rotation 3
          results = [
            [-2, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
          ];
          break;
      }
      break;
    // Case for square piece (pieceType 3)
    case 3:
      // Set the points for the square piece (same for all rotations)
      results = [
        [-1, -1],
        [0, -1],
        [-1, 0],
        [0, 0],
      ];
      break;
    // Case for Z-shaped piece (pieceType 4)
    case 4:
      // Switch based on the rotation
      switch (rotation) {
        // Case for rotation 0
        case 0:
          // Set the points for rotation 0
          results = [
            [-1, -1],
            [-2, 0],
            [-1, 0],
            [0, -1],
          ];
          break;
        // Case for rotation 1
        case 1:
          // Set the points for rotation 1
          results = [
            [-1, -1],
            [-1, 0],
            [0, 0],
            [0, 1],
          ];
          break;
        // Case for rotation 2
        case 2:
          // Set the points for rotation 2
          results = [
            [-1, 0],
            [-2, 1],
            [-1, 1],
            [0, 0],
          ];
          break;
        // Case for rotation 3
        case 3:
          // Set the points for rotation 3
          results = [
            [-2, -1],
            [-2, 0],
            [-1, 0],
            [-1, 1],
          ];
          break;
      }
      break;
    // Case for S-shaped piece (pieceType 5)
    case 5:
      // Switch based on the rotation
      switch (rotation) {
        // Case for rotation 0
        case 0:
          // Set the points for rotation 0
          results = [
            [-1, 0],
            [0, 0],
            [1, 0],
            [0, -1],
          ];
          break;
        // Case for rotation 1
        case 1:
          // Set the points for rotation 1
          results = [
            [0, -1],
            [0, 0],
            [0, 1],
            [1, 0],
          ];
          break;
        // Case for rotation 2
        case 2:
          // Set the points for rotation 2
          results = [
            [-1, 0],
            [0, 0],
            [1, 0],
            [0, 1],
          ];
          break;
        // Case for rotation 3
        case 3:
          // Set the points for rotation 3
          results = [
            [0, -1],
            [0, 0],
            [0, 1],
            [-1, 0],
          ];
          break;
      }
      break;
    // Case for T-shaped piece (pieceType 6)
    case 6:
      // Switch based on the rotation
      switch (rotation) {
        // Case for rotation 0
        case 0:
          // Set the points for rotation 0
          results = [
            [-2, -1],
            [-1, -1],
            [-1, 0],
            [0, 0],
          ];
          break;
        // Case for rotation 1
        case 1:
          // Set the points for rotation 1
          results = [
            [-1, 0],
            [-1, 1],
            [0, 0],
            [0, -1],
          ];
          break;
        // Case for rotation 2
        case 2:
          // Set the points for rotation 2
          results = [
            [-2, 0],
            [-1, 0],
            [-1, 1],
            [0, 1],
          ];
          break;
        // Case for rotation 3
        case 3:
          // Set the points for rotation 3
          results = [
            [-2, 0],
            [-2, 1],
            [-1, 0],
            [-1, -1],
          ];
          break;
      }
      break;
  }
  // Return the resulting points
  return results;
}
