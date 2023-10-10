<?php
    function redirect(string $url) {
        header('Location: ' . $url);
        die();
    }

    function error_unauthorized() {
        http_response_code(403);    // Not authorized
        die();
    }

    function error_bad_request() {
        http_response_code(400);    // Bad request
        die();
    }

    function execute_query(string $query, array $params = array()) {
        $db_username = 'ponzidav';
        $db_password = 'password';
        $db_dbname = 'my_ponzidav';

        try {
            $db = new PDO('mysql:host=localhost:3306;dbname=' . $db_dbname, $db_username, $db_password);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $db->prepare($query);
            $stmt->execute($params);

            return $stmt;
        } catch (PDOException $e) {
            die('Database connection failed: ' . $e->getMessage());
        }
    }

    // Execute a query and automatically fetch the result
    function execute_query_select(string $query, array $params = array()) {
        return execute_query($query, $params)->fetchAll(PDO::FETCH_ASSOC);
    }

    function set_cookie(string $name, string $value) {
        $duration = 60*60*24*30; // thirthy days

        setcookie($name, $value, $duration, '/');
    }

    function echo_conditional(bool $condition, string $value_if_true, string $value_if_false) {
        echo $condition ? $value_if_true : $value_if_false;
    }

    // Return years elapsed from date $from to date $to.
    //   If $from > $to, the result is negative.
    //   If $to is not provided, use current datetime
    function datediff_years(DateTime $from, DateTime $to = new DateTime()) {
        $diff = $from->diff($to);
        
        $y = $diff->y;
        if ($diff->invert)
            $y = -$y;
        
        return $y;
    }
?>
