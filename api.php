<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Data file path
$dataFile = __DIR__ . '/data.json';

// Create data file if not exists
if (!file_exists($dataFile)) {
    $defaultData = [
        'centers' => [],
        'lastModified' => date('Y-m-d H:i:s')
    ];
    file_put_contents($dataFile, json_encode($defaultData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

// Get request method
$method = $_SERVER['REQUEST_METHOD'];

try {
    switch ($method) {
        case 'GET':
            // Read data
            $data = file_get_contents($dataFile);
            echo $data;
            break;

        case 'POST':
        case 'PUT':
            // Write data
            $input = file_get_contents('php://input');
            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                http_response_code(400);
                echo json_encode(['error' => 'Invalid JSON']);
                exit();
            }

            // Add timestamp
            $data['lastModified'] = date('Y-m-d H:i:s');

            // Save data
            $result = file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

            if ($result === false) {
                http_response_code(500);
                echo json_encode(['error' => 'Failed to save data']);
                exit();
            }

            echo json_encode([
                'success' => true,
                'message' => 'Data saved successfully',
                'timestamp' => $data['lastModified']
            ]);
            break;

        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
