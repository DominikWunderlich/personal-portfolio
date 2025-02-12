import React from 'react';
import profilePic from '../images/profile.jpeg';
import projectPic from '../images/ProjectManagement.jpg'
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Link,
  Paper,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';

import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skills = {
    frontend: [
      { name: 'React', level: 70 },
      { name: 'Python', level: 100 },
      { name: 'Java', level: 63 }
    ],
    backend: [
      { name: 'Machine Learning & KI', level: 100 },
      { name: 'Datenverarbeitung & ETL', level: 65 },
      { name: 'Datenvisualisierung', level: 50 }
    ]
  };

  const projects = [
    {
      title: 'Amazon Review App',
      description: 'Entwicklung eines innovativen Tools zur Automatisierung von Bewertungsanfragen, um die Arbeitsabläufe von Verkäufern zu optimieren.',
      technologies: ['REST', 'Python', 'OAuth']
    },
    {
      title: 'Tart Virtualisierung für CI/CD',
      description: 'Integration von Tart in Kombination mit Bitbucket, Jenkins und Artifactory zur Verbesserung der Entwicklungsprozesse.',
      technologies: ['Tart', 'Jenkins', 'Bitbucket', 'Artifactory']
    },
    {
      title: 'Dating Site Web Application',
      description: 'Entwicklung einer dynamischen Dating-Web-App mit Python (Flask), Flask-RESTx für APIs, React für das Frontend und MySQL als Datenbank.',
      technologies: ['Flask', 'React', 'MySQL']
    }
  ];

  const languages = [
    { language: 'Deutsch', level: 'Muttersprache' },
    { language: 'Englisch', level: 'Fließend (C1)' },
    { language: 'Portugiesisch', level: 'Grundkenntnisse (A2)' }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation */}
      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#about" color="inherit" underline="none">Über mich</Link>
              <Link href="#projects" color="inherit" underline="none">Projekte</Link>
              <Link href="#skills" color="inherit" underline="none">Skills</Link>
              <Link href="#languages" color="inherit" underline="none">Sprachen</Link>
              <Link href="#contact" color="inherit" underline="none">Kontakt</Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box id="about" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={profilePic}
              alt="Profile"
              sx={{
                width: 150,
                height: 150,
                borderRadius: '50%',
                mb: 3
              }}
            />
            <Typography variant="h3" gutterBottom>
              Dominik Wunderlich
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Software Engineer | Founder JODOKO | Student Business Informatics
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Ich bin ein leidenschaftlicher Softwareingenieur mit Fokus auf innovative Anwendungen in
            den Bereichen KI und Cloud-Technologien.  Durch mein Studium der Wirtschaftsinformatik und
            die Führung eines eigenen E-Commerce-Unternehmens  verbinde ich technologisches Know-how mit
            unternehmerischem Denken, um zukunftsorientierte, skalierbare Lösungen zu entwickeln.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Projekte
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={projectPic}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.technologies.map((tech, idx) => (
                        <Paper
                          key={idx}
                          sx={{
                            px: 1,
                            py: 0.5,
                            bgcolor: 'primary.light',
                            color: 'primary.contrastText'
                          }}
                        >
                          {tech}
                        </Paper>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Technische Fähigkeiten
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Software Engineering
              </Typography>
              {skills.frontend.map((skill, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">{skill.name}</Typography>
                    <Typography variant="body2">{skill.level}%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={skill.level} />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Data Science
              </Typography>
              {skills.backend.map((skill, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">{skill.name}</Typography>
                    <Typography variant="body2">{skill.level}%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={skill.level} />
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Languages Section */}
      <Box id="languages" sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Sprachen
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {languages.map((lang, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {lang.language}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {lang.level}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Kontakt
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <IconButton color="primary" href="https://github.com/DominikWunderlich">
              <GitHubIcon />
            </IconButton>
            <IconButton color="primary" href="https://www.linkedin.com/in/dominik-abilio-wunderlich-a807b81b2">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary" href="mailto:dominik.wunderlich@jodoko.de">
              <EmailIcon />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <PhoneIcon /> +49 123 456789
            </Typography>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
              <EmailIcon /> dominik.wunderlich@jodoko.de
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Max Mustermann. Alle Rechte vorbehalten.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;