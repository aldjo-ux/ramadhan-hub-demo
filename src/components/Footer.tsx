const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear}{" "}
          <span className="font-medium text-primary">Rama</span>
          <span className="font-medium text-secondary">Apps</span>
          . Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
